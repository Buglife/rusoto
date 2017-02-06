#![cfg_attr(feature = "unstable", feature(const_fn, drop_types_in_const))]
#![cfg_attr(feature = "nightly-testing", feature(plugin))]
#![cfg_attr(feature = "nightly-testing", plugin(clippy))]
#![cfg_attr(not(feature = "unstable"), deny(warnings))]

extern crate inflector;
#[macro_use]
extern crate lazy_static;
extern crate regex;
extern crate serde;
extern crate serde_json;
extern crate hyper;

#[cfg(feature = "serde_derive")]
#[macro_use]
extern crate serde_derive;
#[cfg(not(feature = "serde_derive"))]
extern crate serde_codegen;

use std::fs::{File, rename};
use std::io::BufReader;
use std::path::Path;

use botocore::Service as BotocoreService;
use generator::generate_source;

pub mod botocore;
pub mod generator;
mod serialization;
mod util;

const BOTOCORE_DIR: &'static str = concat!(env!("CARGO_MANIFEST_DIR"), "/botocore/botocore/data/");

pub struct Service {
    pub name: String,
    protocol_date: String,
}

impl Service {
    pub fn new<S>(name: S, protocol_date: S) -> Self
        where S: Into<String> {
        Service {
            name: name.into(),
            protocol_date: protocol_date.into(),
        }
    }
}

pub fn generate(service: Service, output_path: &Path) -> i32 {
    let botocore_destination_path = output_path.join(format!("{}/src/{}_botocore.rs", service.name, service.name));
    let serde_destination_path = output_path.join(format!("{}/src/{}.rs", service.name, service.name));
    let botocore_service_data_path = Path::new(BOTOCORE_DIR)
        .join(format!("{}/{}/service-2.json", service.name, service.protocol_date));

    let needs_serde = botocore_generate(botocore_service_data_path.as_path(),
                                        botocore_destination_path.as_path());

    // only pass the generated code through serde if we actually need JSON serialization
    if needs_serde {
        serde_generate(botocore_destination_path.as_path(),
                       serde_destination_path.as_path());
    } else {
        rename(botocore_destination_path, serde_destination_path).unwrap();
    }

    return 1;

}

fn botocore_generate(input_path: &Path, output_path: &Path) -> bool {
    let input_file = File::open(input_path).expect(&format!(
        "{:?} not found",
        input_path,
    ));

    let service_data_as_reader = BufReader::new(input_file);

    let service: BotocoreService = serde_json::from_reader(service_data_as_reader).expect(&format!(
        "Could not convert JSON in {:?} to Service",
        input_path,
    ));

    match generate_source(&service, output_path) {
        Ok(()) => {},
        _ => panic!("Failed to write file at {:?}", output_path)
    }

    match &service.metadata.protocol[..] {
        "json" | "rest-json" => true,
        _ => false,
    }
}

#[cfg(not(feature = "serde_derive"))]
fn serde_generate(source: &Path, destination: &Path) {
    ::serde_codegen::expand(&source, &destination).unwrap();
}

#[cfg(feature = "serde_derive")]
fn serde_generate(source: &Path, destination: &Path) {
    ::std::fs::copy(source, destination).expect(&format!(
        "Failed to copy {:?} to {:?}",
        source,
        destination,
    ));
}

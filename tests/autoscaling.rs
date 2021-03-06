#![cfg(feature = "autoscaling")]

extern crate rusoto;

use rusoto::autoscaling::{AutoscalingClient, AutoScalingGroupNamesType};
use rusoto::{DefaultCredentialsProvider, Region};
use rusoto::default_tls_client;

#[test]
fn should_describe_auto_scaling_groups() {
    let credentials = DefaultCredentialsProvider::new().unwrap();
    let client = AutoscalingClient::new(default_tls_client().unwrap(), credentials, Region::UsEast1);
    let request = AutoScalingGroupNamesType::default();

    let response = client.describe_auto_scaling_groups(&request).unwrap();
    println!("{:#?}", response);
}


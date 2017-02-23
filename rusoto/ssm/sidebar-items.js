initSidebarItems({"enum":[["AddTagsToResourceError","Errors returned by AddTagsToResource"],["CancelCommandError","Errors returned by CancelCommand"],["CreateActivationError","Errors returned by CreateActivation"],["CreateAssociationBatchError","Errors returned by CreateAssociationBatch"],["CreateAssociationError","Errors returned by CreateAssociation"],["CreateDocumentError","Errors returned by CreateDocument"],["CreateMaintenanceWindowError","Errors returned by CreateMaintenanceWindow"],["CreatePatchBaselineError","Errors returned by CreatePatchBaseline"],["DeleteActivationError","Errors returned by DeleteActivation"],["DeleteAssociationError","Errors returned by DeleteAssociation"],["DeleteDocumentError","Errors returned by DeleteDocument"],["DeleteMaintenanceWindowError","Errors returned by DeleteMaintenanceWindow"],["DeleteParameterError","Errors returned by DeleteParameter"],["DeletePatchBaselineError","Errors returned by DeletePatchBaseline"],["DeregisterManagedInstanceError","Errors returned by DeregisterManagedInstance"],["DeregisterPatchBaselineForPatchGroupError","Errors returned by DeregisterPatchBaselineForPatchGroup"],["DeregisterTargetFromMaintenanceWindowError","Errors returned by DeregisterTargetFromMaintenanceWindow"],["DeregisterTaskFromMaintenanceWindowError","Errors returned by DeregisterTaskFromMaintenanceWindow"],["DescribeActivationsError","Errors returned by DescribeActivations"],["DescribeAssociationError","Errors returned by DescribeAssociation"],["DescribeAutomationExecutionsError","Errors returned by DescribeAutomationExecutions"],["DescribeAvailablePatchesError","Errors returned by DescribeAvailablePatches"],["DescribeDocumentError","Errors returned by DescribeDocument"],["DescribeDocumentPermissionError","Errors returned by DescribeDocumentPermission"],["DescribeEffectiveInstanceAssociationsError","Errors returned by DescribeEffectiveInstanceAssociations"],["DescribeEffectivePatchesForPatchBaselineError","Errors returned by DescribeEffectivePatchesForPatchBaseline"],["DescribeInstanceAssociationsStatusError","Errors returned by DescribeInstanceAssociationsStatus"],["DescribeInstanceInformationError","Errors returned by DescribeInstanceInformation"],["DescribeInstancePatchStatesError","Errors returned by DescribeInstancePatchStates"],["DescribeInstancePatchStatesForPatchGroupError","Errors returned by DescribeInstancePatchStatesForPatchGroup"],["DescribeInstancePatchesError","Errors returned by DescribeInstancePatches"],["DescribeMaintenanceWindowExecutionTaskInvocationsError","Errors returned by DescribeMaintenanceWindowExecutionTaskInvocations"],["DescribeMaintenanceWindowExecutionTasksError","Errors returned by DescribeMaintenanceWindowExecutionTasks"],["DescribeMaintenanceWindowExecutionsError","Errors returned by DescribeMaintenanceWindowExecutions"],["DescribeMaintenanceWindowTargetsError","Errors returned by DescribeMaintenanceWindowTargets"],["DescribeMaintenanceWindowTasksError","Errors returned by DescribeMaintenanceWindowTasks"],["DescribeMaintenanceWindowsError","Errors returned by DescribeMaintenanceWindows"],["DescribeParametersError","Errors returned by DescribeParameters"],["DescribePatchBaselinesError","Errors returned by DescribePatchBaselines"],["DescribePatchGroupStateError","Errors returned by DescribePatchGroupState"],["DescribePatchGroupsError","Errors returned by DescribePatchGroups"],["GetAutomationExecutionError","Errors returned by GetAutomationExecution"],["GetCommandInvocationError","Errors returned by GetCommandInvocation"],["GetDefaultPatchBaselineError","Errors returned by GetDefaultPatchBaseline"],["GetDeployablePatchSnapshotForInstanceError","Errors returned by GetDeployablePatchSnapshotForInstance"],["GetDocumentError","Errors returned by GetDocument"],["GetInventoryError","Errors returned by GetInventory"],["GetInventorySchemaError","Errors returned by GetInventorySchema"],["GetMaintenanceWindowError","Errors returned by GetMaintenanceWindow"],["GetMaintenanceWindowExecutionError","Errors returned by GetMaintenanceWindowExecution"],["GetMaintenanceWindowExecutionTaskError","Errors returned by GetMaintenanceWindowExecutionTask"],["GetParameterHistoryError","Errors returned by GetParameterHistory"],["GetParametersError","Errors returned by GetParameters"],["GetPatchBaselineError","Errors returned by GetPatchBaseline"],["GetPatchBaselineForPatchGroupError","Errors returned by GetPatchBaselineForPatchGroup"],["ListAssociationsError","Errors returned by ListAssociations"],["ListCommandInvocationsError","Errors returned by ListCommandInvocations"],["ListCommandsError","Errors returned by ListCommands"],["ListDocumentVersionsError","Errors returned by ListDocumentVersions"],["ListDocumentsError","Errors returned by ListDocuments"],["ListInventoryEntriesError","Errors returned by ListInventoryEntries"],["ListTagsForResourceError","Errors returned by ListTagsForResource"],["ModifyDocumentPermissionError","Errors returned by ModifyDocumentPermission"],["PutInventoryError","Errors returned by PutInventory"],["PutParameterError","Errors returned by PutParameter"],["RegisterDefaultPatchBaselineError","Errors returned by RegisterDefaultPatchBaseline"],["RegisterPatchBaselineForPatchGroupError","Errors returned by RegisterPatchBaselineForPatchGroup"],["RegisterTargetWithMaintenanceWindowError","Errors returned by RegisterTargetWithMaintenanceWindow"],["RegisterTaskWithMaintenanceWindowError","Errors returned by RegisterTaskWithMaintenanceWindow"],["RemoveTagsFromResourceError","Errors returned by RemoveTagsFromResource"],["SendCommandError","Errors returned by SendCommand"],["StartAutomationExecutionError","Errors returned by StartAutomationExecution"],["StopAutomationExecutionError","Errors returned by StopAutomationExecution"],["UpdateAssociationError","Errors returned by UpdateAssociation"],["UpdateAssociationStatusError","Errors returned by UpdateAssociationStatus"],["UpdateDocumentDefaultVersionError","Errors returned by UpdateDocumentDefaultVersion"],["UpdateDocumentError","Errors returned by UpdateDocument"],["UpdateMaintenanceWindowError","Errors returned by UpdateMaintenanceWindow"],["UpdateManagedInstanceRoleError","Errors returned by UpdateManagedInstanceRole"],["UpdatePatchBaselineError","Errors returned by UpdatePatchBaseline"]],"struct":[["Activation","<p>An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance.</p>"],["AddTagsToResourceRequest",""],["AddTagsToResourceResult",""],["Association","<p>Describes an association of an SSM document and an instance.</p>"],["AssociationDescription","<p>Describes the parameters for a document.</p>"],["AssociationFilter","<p>Describes a filter.</p>"],["AssociationOverview","<p>Information about the association.</p>"],["AssociationStatus","<p>Describes an association status.</p>"],["AutomationExecution","<p>Detailed information about the current state of an individual Automation execution.</p>"],["AutomationExecutionFilter","<p>A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.</p>"],["AutomationExecutionMetadata","<p>Details about a specific Automation execution.</p>"],["CancelCommandRequest","<p/>"],["CancelCommandResult","<p>Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled.</p>"],["Command","<p>Describes a command request.</p>"],["CommandFilter","<p>Describes a command filter.</p>"],["CommandInvocation","<p>An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user executes SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you executed. </p>"],["CommandPlugin","<p>Describes plugin details.</p>"],["CreateActivationRequest",""],["CreateActivationResult",""],["CreateAssociationBatchRequest",""],["CreateAssociationBatchRequestEntry","<p> Describes the association of an SSM document and an instance. </p>"],["CreateAssociationBatchResult",""],["CreateAssociationRequest",""],["CreateAssociationResult",""],["CreateDocumentRequest",""],["CreateDocumentResult",""],["CreateMaintenanceWindowRequest",""],["CreateMaintenanceWindowResult",""],["CreatePatchBaselineRequest",""],["CreatePatchBaselineResult",""],["DeleteActivationRequest",""],["DeleteActivationResult",""],["DeleteAssociationRequest",""],["DeleteAssociationResult",""],["DeleteDocumentRequest",""],["DeleteDocumentResult",""],["DeleteMaintenanceWindowRequest",""],["DeleteMaintenanceWindowResult",""],["DeleteParameterRequest",""],["DeleteParameterResult",""],["DeletePatchBaselineRequest",""],["DeletePatchBaselineResult",""],["DeregisterManagedInstanceRequest",""],["DeregisterManagedInstanceResult",""],["DeregisterPatchBaselineForPatchGroupRequest",""],["DeregisterPatchBaselineForPatchGroupResult",""],["DeregisterTargetFromMaintenanceWindowRequest",""],["DeregisterTargetFromMaintenanceWindowResult",""],["DeregisterTaskFromMaintenanceWindowRequest",""],["DeregisterTaskFromMaintenanceWindowResult",""],["DescribeActivationsFilter","<p>Filter for the DescribeActivation API.</p>"],["DescribeActivationsRequest",""],["DescribeActivationsResult",""],["DescribeAssociationRequest",""],["DescribeAssociationResult",""],["DescribeAutomationExecutionsRequest",""],["DescribeAutomationExecutionsResult",""],["DescribeAvailablePatchesRequest",""],["DescribeAvailablePatchesResult",""],["DescribeDocumentPermissionRequest",""],["DescribeDocumentPermissionResponse",""],["DescribeDocumentRequest",""],["DescribeDocumentResult",""],["DescribeEffectiveInstanceAssociationsRequest",""],["DescribeEffectiveInstanceAssociationsResult",""],["DescribeEffectivePatchesForPatchBaselineRequest",""],["DescribeEffectivePatchesForPatchBaselineResult",""],["DescribeInstanceAssociationsStatusRequest",""],["DescribeInstanceAssociationsStatusResult",""],["DescribeInstanceInformationRequest",""],["DescribeInstanceInformationResult",""],["DescribeInstancePatchStatesForPatchGroupRequest",""],["DescribeInstancePatchStatesForPatchGroupResult",""],["DescribeInstancePatchStatesRequest",""],["DescribeInstancePatchStatesResult",""],["DescribeInstancePatchesRequest",""],["DescribeInstancePatchesResult",""],["DescribeMaintenanceWindowExecutionTaskInvocationsRequest",""],["DescribeMaintenanceWindowExecutionTaskInvocationsResult",""],["DescribeMaintenanceWindowExecutionTasksRequest",""],["DescribeMaintenanceWindowExecutionTasksResult",""],["DescribeMaintenanceWindowExecutionsRequest",""],["DescribeMaintenanceWindowExecutionsResult",""],["DescribeMaintenanceWindowTargetsRequest",""],["DescribeMaintenanceWindowTargetsResult",""],["DescribeMaintenanceWindowTasksRequest",""],["DescribeMaintenanceWindowTasksResult",""],["DescribeMaintenanceWindowsRequest",""],["DescribeMaintenanceWindowsResult",""],["DescribeParametersRequest",""],["DescribeParametersResult",""],["DescribePatchBaselinesRequest",""],["DescribePatchBaselinesResult",""],["DescribePatchGroupStateRequest",""],["DescribePatchGroupStateResult",""],["DescribePatchGroupsRequest",""],["DescribePatchGroupsResult",""],["DocumentDefaultVersionDescription","<p>A default version of a document.</p>"],["DocumentDescription","<p> Describes an SSM document. </p>"],["DocumentFilter","<p>Describes a filter.</p>"],["DocumentIdentifier","<p>Describes the name of an SSM document.</p>"],["DocumentParameter","<p>Parameters specified in the SSM document that execute on the server when the command is run. </p>"],["DocumentVersionInfo","<p>Version information about the document.</p>"],["EffectivePatch","<p>The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.</p>"],["FailedCreateAssociation","<p>Describes a failed association.</p>"],["GetAutomationExecutionRequest",""],["GetAutomationExecutionResult",""],["GetCommandInvocationRequest",""],["GetCommandInvocationResult",""],["GetDefaultPatchBaselineRequest",""],["GetDefaultPatchBaselineResult",""],["GetDeployablePatchSnapshotForInstanceRequest",""],["GetDeployablePatchSnapshotForInstanceResult",""],["GetDocumentRequest",""],["GetDocumentResult",""],["GetInventoryRequest",""],["GetInventoryResult",""],["GetInventorySchemaRequest",""],["GetInventorySchemaResult",""],["GetMaintenanceWindowExecutionRequest",""],["GetMaintenanceWindowExecutionResult",""],["GetMaintenanceWindowExecutionTaskRequest",""],["GetMaintenanceWindowExecutionTaskResult",""],["GetMaintenanceWindowRequest",""],["GetMaintenanceWindowResult",""],["GetParameterHistoryRequest",""],["GetParameterHistoryResult",""],["GetParametersRequest",""],["GetParametersResult",""],["GetPatchBaselineForPatchGroupRequest",""],["GetPatchBaselineForPatchGroupResult",""],["GetPatchBaselineRequest",""],["GetPatchBaselineResult",""],["InstanceAggregatedAssociationOverview","<p>Status information about the aggregated associations.</p>"],["InstanceAssociation","<p>One or more association documents on the instance. </p>"],["InstanceAssociationOutputLocation","<p>An Amazon S3 bucket where you want to store the results of this request.</p>"],["InstanceAssociationOutputUrl","<p>The URL of Amazon S3 bucket where you want to store the results of this request.</p>"],["InstanceAssociationStatusInfo","<p>Status information about the instance association.</p>"],["InstanceInformation","<p>Describes a filter for a specific list of instances. </p>"],["InstanceInformationFilter","<p>Describes a filter for a specific list of instances. </p>"],["InstanceInformationStringFilter","<p>The filters to describe or get information about your managed instances.</p>"],["InstancePatchState","<p>Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.</p>"],["InstancePatchStateFilter","<p>Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API.</p>"],["InventoryFilter","<p>One or more filters. Use a filter to return a more specific list of results.</p>"],["InventoryItem","<p>Information collected from managed instances based on your inventory policy document</p>"],["InventoryItemAttribute","<p>Attributes are the entries within the inventory item content. It contains name and value.</p>"],["InventoryItemSchema","<p>The inventory item schema definition. Users can use this to compose inventory query filters.</p>"],["InventoryResultEntity","<p>Inventory query results.</p>"],["InventoryResultItem","<p>The inventory result item.</p>"],["ListAssociationsRequest",""],["ListAssociationsResult",""],["ListCommandInvocationsRequest",""],["ListCommandInvocationsResult",""],["ListCommandsRequest",""],["ListCommandsResult",""],["ListDocumentVersionsRequest",""],["ListDocumentVersionsResult",""],["ListDocumentsRequest",""],["ListDocumentsResult",""],["ListInventoryEntriesRequest",""],["ListInventoryEntriesResult",""],["ListTagsForResourceRequest",""],["ListTagsForResourceResult",""],["LoggingInfo","<p>Information about an Amazon S3 bucket to write instance-level logs to.</p>"],["MaintenanceWindowExecution","<p>Describes the information about an execution of a Maintenance Window. </p>"],["MaintenanceWindowExecutionTaskIdentity","<p>Information about a task execution performed as part of a Maintenance Window execution.</p>"],["MaintenanceWindowExecutionTaskInvocationIdentity","<p>Describes the information about a task invocation for a particular target as part of a task execution performed as part of a Maintenance Window execution.</p>"],["MaintenanceWindowFilter","<p>Filter used in the request.</p>"],["MaintenanceWindowIdentity","<p>Information about the Maintenance Window.</p>"],["MaintenanceWindowTarget","<p>The target registered with the Maintenance Window.</p>"],["MaintenanceWindowTask","<p>Information about a task defined for a Maintenance Window.</p>"],["MaintenanceWindowTaskParameterValueExpression","<p>Defines the values for a task parameter.</p>"],["ModifyDocumentPermissionRequest",""],["ModifyDocumentPermissionResponse",""],["NotificationConfig","<p>Configurations for sending notifications.</p>"],["Parameter","<p>An Amazon EC2 Systems Manager parameter in Parameter Store.</p>"],["ParameterHistory","<p>Information about parameter usage.</p>"],["ParameterMetadata","<p>Metada includes information like the ARN of the last user and the date/time the parameter was last used.</p>"],["ParametersFilter","<p>One or more filters. Use a filter to return a more specific list of results.</p>"],["Patch","<p>Represents metadata about a patch.</p>"],["PatchBaselineIdentity","<p>Defines the basic information about a patch baseline.</p>"],["PatchComplianceData","<p>Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.</p>"],["PatchFilter","<p>Defines a patch filter.</p>"],["PatchFilterGroup","<p>A set of patch filters, typically used for approval rules.</p>"],["PatchGroupPatchBaselineMapping","<p>The mapping between a patch group and the patch baseline the patch group is registered with.</p>"],["PatchOrchestratorFilter","<p>Defines a filter used in Patch Manager APIs.</p>"],["PatchRule","<p>Defines an approval rule for a patch baseline.</p>"],["PatchRuleGroup","<p>A set of rules defining the approval rules for a patch baseline.</p>"],["PatchStatus","<p>Information about the approval status of a patch.</p>"],["PutInventoryRequest",""],["PutInventoryResult",""],["PutParameterRequest",""],["PutParameterResult",""],["RegisterDefaultPatchBaselineRequest",""],["RegisterDefaultPatchBaselineResult",""],["RegisterPatchBaselineForPatchGroupRequest",""],["RegisterPatchBaselineForPatchGroupResult",""],["RegisterTargetWithMaintenanceWindowRequest",""],["RegisterTargetWithMaintenanceWindowResult",""],["RegisterTaskWithMaintenanceWindowRequest",""],["RegisterTaskWithMaintenanceWindowResult",""],["RemoveTagsFromResourceRequest",""],["RemoveTagsFromResourceResult",""],["ResultAttribute","<p>The inventory item result attribute.</p>"],["S3OutputLocation","<p>An Amazon S3 bucket where you want to store the results of this request.</p>"],["S3OutputUrl","<p>A URL for the Amazon S3 bucket where you want to store the results of this request.</p>"],["SendCommandRequest",""],["SendCommandResult",""],["SsmClient","A client for the Amazon SSM API."],["StartAutomationExecutionRequest",""],["StartAutomationExecutionResult",""],["StepExecution","<p>Detailed information about an the execution state of an Automation step.</p>"],["StopAutomationExecutionRequest",""],["StopAutomationExecutionResult",""],["Tag","<p>Metadata that you assign to your managed instances. Tags enable you to categorize your managed instances in different ways, for example, by purpose, owner, or environment.</p>"],["Target","<p>An array of search criteria that targets instances using a <code>Key</code>;<code>Value</code> combination that you specify. <code>Targets</code> is required if you don't provide one or more instance IDs in the call.</p>"],["UpdateAssociationRequest",""],["UpdateAssociationResult",""],["UpdateAssociationStatusRequest",""],["UpdateAssociationStatusResult",""],["UpdateDocumentDefaultVersionRequest",""],["UpdateDocumentDefaultVersionResult",""],["UpdateDocumentRequest",""],["UpdateDocumentResult",""],["UpdateMaintenanceWindowRequest",""],["UpdateMaintenanceWindowResult",""],["UpdateManagedInstanceRoleRequest",""],["UpdateManagedInstanceRoleResult",""],["UpdatePatchBaselineRequest",""],["UpdatePatchBaselineResult",""]],"type":[["AccountId",""],["AccountIdList",""],["ActivationCode",""],["ActivationDescription",""],["ActivationId",""],["ActivationList",""],["AgentErrorCode",""],["ApproveAfterDays",""],["AssociationDescriptionList",""],["AssociationFilterKey",""],["AssociationFilterList",""],["AssociationFilterValue",""],["AssociationId",""],["AssociationList",""],["AssociationStatusAggregatedCount",""],["AssociationStatusName",""],["AttributeName",""],["AttributeValue",""],["AutomationActionName",""],["AutomationExecutionFilterKey",""],["AutomationExecutionFilterList",""],["AutomationExecutionFilterValue",""],["AutomationExecutionFilterValueList",""],["AutomationExecutionId",""],["AutomationExecutionMetadataList",""],["AutomationExecutionStatus",""],["AutomationParameterKey",""],["AutomationParameterMap",""],["AutomationParameterValue",""],["AutomationParameterValueList",""],["BaselineDescription",""],["BaselineId",""],["BaselineName",""],["BatchErrorMessage",""],["Boolean",""],["ClientToken",""],["CommandFilterKey",""],["CommandFilterList",""],["CommandFilterValue",""],["CommandId",""],["CommandInvocationList",""],["CommandInvocationStatus",""],["CommandList",""],["CommandMaxResults",""],["CommandPluginList",""],["CommandPluginName",""],["CommandPluginOutput",""],["CommandPluginStatus",""],["CommandStatus",""],["Comment",""],["CompletedCount",""],["ComputerName",""],["CreateAssociationBatchRequestEntries",""],["CreatedDate",""],["DateTime",""],["DefaultBaseline",""],["DefaultInstanceName",""],["DescribeActivationsFilterKeys",""],["DescribeActivationsFilterList",""],["DescriptionInDocument",""],["DocumentARN",""],["DocumentContent",""],["DocumentFilterKey",""],["DocumentFilterList",""],["DocumentFilterValue",""],["DocumentHash",""],["DocumentHashType",""],["DocumentIdentifierList",""],["DocumentName",""],["DocumentOwner",""],["DocumentParameterDefaultValue",""],["DocumentParameterDescrption",""],["DocumentParameterList",""],["DocumentParameterName",""],["DocumentParameterType",""],["DocumentPermissionType",""],["DocumentSchemaVersion",""],["DocumentSha1",""],["DocumentStatus",""],["DocumentType",""],["DocumentVersion",""],["DocumentVersionList",""],["DocumentVersionNumber",""],["EffectiveInstanceAssociationMaxResults",""],["EffectivePatchList",""],["ErrorCount",""],["ExpirationDate",""],["FailedCreateAssociationList",""],["Fault",""],["GetInventorySchemaMaxResults",""],["IPAddress",""],["IamRole",""],["InstanceAssociationExecutionSummary",""],["InstanceAssociationList",""],["InstanceAssociationStatusAggregatedCount",""],["InstanceAssociationStatusInfos",""],["InstanceCount",""],["InstanceId",""],["InstanceIdList",""],["InstanceInformationFilterKey",""],["InstanceInformationFilterList",""],["InstanceInformationFilterValue",""],["InstanceInformationFilterValueSet",""],["InstanceInformationList",""],["InstanceInformationStringFilterKey",""],["InstanceInformationStringFilterList",""],["InstancePatchStateFilterKey",""],["InstancePatchStateFilterList",""],["InstancePatchStateFilterValue",""],["InstancePatchStateFilterValues",""],["InstancePatchStateList",""],["InstancePatchStateOperatorType",""],["InstancePatchStatesList",""],["InstanceTagName",""],["Integer",""],["InventoryAttributeDataType",""],["InventoryFilterKey",""],["InventoryFilterList",""],["InventoryFilterValue",""],["InventoryFilterValueList",""],["InventoryItemAttributeList",""],["InventoryItemAttributeName",""],["InventoryItemCaptureTime",""],["InventoryItemContentHash",""],["InventoryItemEntry",""],["InventoryItemEntryList",""],["InventoryItemList",""],["InventoryItemSchemaResultList",""],["InventoryItemSchemaVersion",""],["InventoryItemTypeName",""],["InventoryItemTypeNameFilter",""],["InventoryQueryOperatorType",""],["InventoryResultEntityId",""],["InventoryResultEntityList",""],["InventoryResultItemKey",""],["InventoryResultItemMap",""],["InvocationTraceOutput",""],["KeyList",""],["MaintenanceWindowAllowUnassociatedTargets",""],["MaintenanceWindowCutoff",""],["MaintenanceWindowDurationHours",""],["MaintenanceWindowEnabled",""],["MaintenanceWindowExecutionId",""],["MaintenanceWindowExecutionList",""],["MaintenanceWindowExecutionStatus",""],["MaintenanceWindowExecutionStatusDetails",""],["MaintenanceWindowExecutionTaskExecutionId",""],["MaintenanceWindowExecutionTaskId",""],["MaintenanceWindowExecutionTaskIdList",""],["MaintenanceWindowExecutionTaskIdentityList",""],["MaintenanceWindowExecutionTaskInvocationId",""],["MaintenanceWindowExecutionTaskInvocationIdentityList",""],["MaintenanceWindowExecutionTaskInvocationParameters",""],["MaintenanceWindowFilterKey",""],["MaintenanceWindowFilterList",""],["MaintenanceWindowFilterValue",""],["MaintenanceWindowFilterValues",""],["MaintenanceWindowId",""],["MaintenanceWindowIdentityList",""],["MaintenanceWindowMaxResults",""],["MaintenanceWindowName",""],["MaintenanceWindowResourceType",""],["MaintenanceWindowSchedule",""],["MaintenanceWindowTargetId",""],["MaintenanceWindowTargetList",""],["MaintenanceWindowTaskArn",""],["MaintenanceWindowTaskId",""],["MaintenanceWindowTaskList",""],["MaintenanceWindowTaskParameterName",""],["MaintenanceWindowTaskParameterValue",""],["MaintenanceWindowTaskParameterValueList",""],["MaintenanceWindowTaskParameters",""],["MaintenanceWindowTaskParametersList",""],["MaintenanceWindowTaskPriority",""],["MaintenanceWindowTaskTargetId",""],["MaintenanceWindowTaskType",""],["ManagedInstanceId",""],["MaxResults",""],["MaxResultsEC2Compatible",""],["NextToken",""],["NormalStringMap",""],["NotificationArn",""],["NotificationEvent",""],["NotificationEventList",""],["NotificationType",""],["OwnerInformation",""],["PSParameterName",""],["PSParameterValue",""],["ParameterDescription",""],["ParameterHistoryList",""],["ParameterKeyId",""],["ParameterList",""],["ParameterMetadataList",""],["ParameterName",""],["ParameterNameList",""],["ParameterType",""],["ParameterValue",""],["ParameterValueList",""],["Parameters",""],["ParametersFilterKey",""],["ParametersFilterList",""],["ParametersFilterValue",""],["ParametersFilterValueList",""],["PatchBaselineIdentityList",""],["PatchBaselineMaxResults",""],["PatchClassification",""],["PatchComplianceDataList",""],["PatchComplianceDataState",""],["PatchComplianceMaxResults",""],["PatchContentUrl",""],["PatchDeploymentStatus",""],["PatchDescription",""],["PatchFailedCount",""],["PatchFilterKey",""],["PatchFilterList",""],["PatchFilterValue",""],["PatchFilterValueList",""],["PatchGroup",""],["PatchGroupList",""],["PatchGroupPatchBaselineMappingList",""],["PatchId",""],["PatchIdList",""],["PatchInstalledCount",""],["PatchInstalledOtherCount",""],["PatchInstalledTime",""],["PatchKbNumber",""],["PatchLanguage",""],["PatchList",""],["PatchMissingCount",""],["PatchMsrcNumber",""],["PatchMsrcSeverity",""],["PatchNotApplicableCount",""],["PatchOperationEndTime",""],["PatchOperationStartTime",""],["PatchOperationType",""],["PatchOrchestratorFilterKey",""],["PatchOrchestratorFilterList",""],["PatchOrchestratorFilterValue",""],["PatchOrchestratorFilterValues",""],["PatchProduct",""],["PatchProductFamily",""],["PatchRuleList",""],["PatchSeverity",""],["PatchTitle",""],["PatchVendor",""],["PingStatus",""],["PlatformType",""],["PlatformTypeList",""],["RegistrationLimit",""],["RegistrationsCount",""],["ResourceId",""],["ResourceType",""],["ResourceTypeForTagging",""],["ResponseCode",""],["ResultAttributeList",""],["S3BucketName",""],["S3KeyPrefix",""],["S3Region",""],["ScheduleExpression",""],["ServiceRole",""],["SnapshotDownloadUrl",""],["SnapshotId",""],["StandardErrorContent",""],["StandardOutputContent",""],["StatusAdditionalInfo",""],["StatusDetails",""],["StatusMessage",""],["StatusName",""],["StepExecutionList",""],["StringDateTime",""],["StringList",""],["TagKey",""],["TagList",""],["TagValue",""],["TargetCount",""],["TargetKey",""],["TargetValue",""],["TargetValues",""],["Targets",""],["TimeoutSeconds",""],["Url",""],["VelocityConstraint",""],["Version",""]]});
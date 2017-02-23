initSidebarItems({"enum":[["AddPermissionError","Errors returned by AddPermission"],["CheckIfPhoneNumberIsOptedOutError","Errors returned by CheckIfPhoneNumberIsOptedOut"],["ConfirmSubscriptionError","Errors returned by ConfirmSubscription"],["CreatePlatformApplicationError","Errors returned by CreatePlatformApplication"],["CreatePlatformEndpointError","Errors returned by CreatePlatformEndpoint"],["CreateTopicError","Errors returned by CreateTopic"],["DeleteEndpointError","Errors returned by DeleteEndpoint"],["DeletePlatformApplicationError","Errors returned by DeletePlatformApplication"],["DeleteTopicError","Errors returned by DeleteTopic"],["GetEndpointAttributesError","Errors returned by GetEndpointAttributes"],["GetPlatformApplicationAttributesError","Errors returned by GetPlatformApplicationAttributes"],["GetSMSAttributesError","Errors returned by GetSMSAttributes"],["GetSubscriptionAttributesError","Errors returned by GetSubscriptionAttributes"],["GetTopicAttributesError","Errors returned by GetTopicAttributes"],["ListEndpointsByPlatformApplicationError","Errors returned by ListEndpointsByPlatformApplication"],["ListPhoneNumbersOptedOutError","Errors returned by ListPhoneNumbersOptedOut"],["ListPlatformApplicationsError","Errors returned by ListPlatformApplications"],["ListSubscriptionsByTopicError","Errors returned by ListSubscriptionsByTopic"],["ListSubscriptionsError","Errors returned by ListSubscriptions"],["ListTopicsError","Errors returned by ListTopics"],["OptInPhoneNumberError","Errors returned by OptInPhoneNumber"],["PublishError","Errors returned by Publish"],["RemovePermissionError","Errors returned by RemovePermission"],["SetEndpointAttributesError","Errors returned by SetEndpointAttributes"],["SetPlatformApplicationAttributesError","Errors returned by SetPlatformApplicationAttributes"],["SetSMSAttributesError","Errors returned by SetSMSAttributes"],["SetSubscriptionAttributesError","Errors returned by SetSubscriptionAttributes"],["SetTopicAttributesError","Errors returned by SetTopicAttributes"],["SubscribeError","Errors returned by Subscribe"],["UnsubscribeError","Errors returned by Unsubscribe"]],"struct":[["AddPermissionInput",""],["CheckIfPhoneNumberIsOptedOutInput","<p>The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>"],["CheckIfPhoneNumberIsOptedOutResponse","<p>The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action.</p>"],["ConfirmSubscriptionInput","<p>Input for ConfirmSubscription action.</p>"],["ConfirmSubscriptionResponse","<p>Response for ConfirmSubscriptions action.</p>"],["CreateEndpointResponse","<p>Response from CreateEndpoint action.</p>"],["CreatePlatformApplicationInput","<p>Input for CreatePlatformApplication action.</p>"],["CreatePlatformApplicationResponse","<p>Response from CreatePlatformApplication action.</p>"],["CreatePlatformEndpointInput","<p>Input for CreatePlatformEndpoint action.</p>"],["CreateTopicInput","<p>Input for CreateTopic action.</p>"],["CreateTopicResponse","<p>Response from CreateTopic action.</p>"],["DeleteEndpointInput","<p>Input for DeleteEndpoint action.</p>"],["DeletePlatformApplicationInput","<p>Input for DeletePlatformApplication action.</p>"],["DeleteTopicInput",""],["GetEndpointAttributesInput","<p>Input for GetEndpointAttributes action.</p>"],["GetEndpointAttributesResponse","<p>Response from GetEndpointAttributes of the EndpointArn.</p>"],["GetPlatformApplicationAttributesInput","<p>Input for GetPlatformApplicationAttributes action.</p>"],["GetPlatformApplicationAttributesResponse","<p>Response for GetPlatformApplicationAttributes action.</p>"],["GetSMSAttributesInput","<p>The input for the <code>GetSMSAttributes</code> request.</p>"],["GetSMSAttributesResponse","<p>The response from the <code>GetSMSAttributes</code> request.</p>"],["GetSubscriptionAttributesInput","<p>Input for GetSubscriptionAttributes.</p>"],["GetSubscriptionAttributesResponse","<p>Response for GetSubscriptionAttributes action.</p>"],["GetTopicAttributesInput","<p>Input for GetTopicAttributes action.</p>"],["GetTopicAttributesResponse","<p>Response for GetTopicAttributes action.</p>"],["ListEndpointsByPlatformApplicationInput","<p>Input for ListEndpointsByPlatformApplication action.</p>"],["ListEndpointsByPlatformApplicationResponse","<p>Response for ListEndpointsByPlatformApplication action.</p>"],["ListPhoneNumbersOptedOutInput","<p>The input for the <code>ListPhoneNumbersOptedOut</code> action.</p>"],["ListPhoneNumbersOptedOutResponse","<p>The response from the <code>ListPhoneNumbersOptedOut</code> action.</p>"],["ListPlatformApplicationsInput","<p>Input for ListPlatformApplications action.</p>"],["ListPlatformApplicationsResponse","<p>Response for ListPlatformApplications action.</p>"],["ListSubscriptionsByTopicInput","<p>Input for ListSubscriptionsByTopic action.</p>"],["ListSubscriptionsByTopicResponse","<p>Response for ListSubscriptionsByTopic action.</p>"],["ListSubscriptionsInput","<p>Input for ListSubscriptions action.</p>"],["ListSubscriptionsResponse","<p>Response for ListSubscriptions action</p>"],["ListTopicsInput",""],["ListTopicsResponse","<p>Response for ListTopics action.</p>"],["MessageAttributeValue","<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href=\"http://docs.aws.amazon.com/sns/latest/api/API_Publish.html\">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href=\"http://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html\">Using Amazon SNS Message Attributes</a>.</p>"],["OptInPhoneNumberInput","<p>Input for the OptInPhoneNumber action.</p>"],["OptInPhoneNumberResponse","<p>The response for the OptInPhoneNumber action.</p>"],["PlatformApplication","<p>Platform application object.</p>"],["PublishInput","<p>Input for Publish action.</p>"],["PublishResponse","<p>Response for Publish action.</p>"],["RemovePermissionInput","<p>Input for RemovePermission action.</p>"],["SetEndpointAttributesInput","<p>Input for SetEndpointAttributes action.</p>"],["SetPlatformApplicationAttributesInput","<p>Input for SetPlatformApplicationAttributes action.</p>"],["SetSMSAttributesInput","<p>The input for the SetSMSAttributes action.</p>"],["SetSMSAttributesResponse","<p>The response for the SetSMSAttributes action.</p>"],["SetSubscriptionAttributesInput","<p>Input for SetSubscriptionAttributes action.</p>"],["SetTopicAttributesInput","<p>Input for SetTopicAttributes action.</p>"],["SnsClient","A client for the Amazon SNS API."],["SubscribeInput","<p>Input for Subscribe action.</p>"],["SubscribeResponse","<p>Response for Subscribe action.</p>"],["Subscription","<p>A wrapper type for the attributes of an Amazon SNS subscription.</p>"],["Topic","<p>A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>.</p>"],["UnsubscribeInput","<p>Input for Unsubscribe action.</p>"]],"type":[["Account",""],["Action",""],["ActionsList",""],["AttributeName",""],["AttributeValue",""],["AuthenticateOnUnsubscribe",""],["Binary",""],["Boolean",""],["Delegate",""],["DelegatesList",""],["Endpoint",""],["Label",""],["ListOfEndpoints",""],["ListOfPlatformApplications",""],["ListString",""],["MapStringToString",""],["Message",""],["MessageAttributeMap",""],["MessageId",""],["MessageStructure",""],["NextToken",""],["PhoneNumber",""],["PhoneNumberList",""],["Protocol",""],["Subject",""],["SubscriptionARN",""],["SubscriptionAttributesMap",""],["SubscriptionsList",""],["Token",""],["TopicARN",""],["TopicAttributesMap",""],["TopicName",""],["TopicsList",""]]});
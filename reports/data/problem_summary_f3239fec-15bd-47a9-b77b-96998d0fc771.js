MIGRATION_ISSUES_DETAILS["f3239fec-15bd-47a9-b77b-96998d0fc771"] = [
{description: "<p><code>QueueConnectionFactory<\/code> was used to obtain connection to JMS queues.<\/p><p>Replace the lookup string <code>QueueConnectionFactory<\/code> with <code>ConnectionFactory<\/code>.<\/p>", ruleID: "jboss-eap5-7-java-02000", issueName: "JMS legacy javax.jms.QueueConnectionFactory",
problemSummaryID: "f3239fec-15bd-47a9-b77b-96998d0fc771", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=82032'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/configuring_messaging/getting_started#connection_factories", t:"JBoss EAP 7 - Basic Messaging Configuration"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/configuring_messaging/configuring_messaging_connection_factories", t:"JBoss EAP 7 - Configuring Connection Factories"},
{h:"https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html#package.description", t:"JavaEE 7 - JMS APIs"},
]},
];
onProblemSummaryLoaded("f3239fec-15bd-47a9-b77b-96998d0fc771");
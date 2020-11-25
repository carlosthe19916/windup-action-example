MIGRATION_ISSUES_DETAILS["f2177bc9-38ae-46c9-9ca4-a92cebb2efeb"] = [
{description: "<p><code>QueueConnectionFactory<\/code> was used to obtain connection to JMS queues.<\/p><p>Replace the lookup string <code>QueueConnectionFactory<\/code> with <code>ConnectionFactory<\/code>.<\/p>", ruleID: "jboss-eap5-7-java-02000", issueName: "JMS legacy javax.jms.QueueConnectionFactory",
problemSummaryID: "f2177bc9-38ae-46c9-9ca4-a92cebb2efeb", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=110600'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/configuring_messaging/configuring_messaging_connection_factories", t:"JBoss EAP 7 - Configuring Connection Factories"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/configuring_messaging/getting_started#connection_factories", t:"JBoss EAP 7 - Basic Messaging Configuration"},
{h:"https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html#package.description", t:"JavaEE 7 - JMS APIs"},
]},
];
onProblemSummaryLoaded("f2177bc9-38ae-46c9-9ca4-a92cebb2efeb");
MIGRATION_ISSUES_DETAILS["2e43998f-d141-44aa-85f9-eb5bf2bc7522"] = [
{description: "<p><code>weblogic.jndi.WLInitialContextFactory<\/code> is an implementation of <code>InitialContextFactory<\/code> used to get object instances from JNDI.<\/p><p>The equivalent functionality needs to be configured on JBoss EAP 7 using <code>org.jboss.naming.remote.client.InitialContextFactory<\/code>. Then the context could be instanticated as follows: <code>InitialContext ctx = new InitialContext();<\/code>.<\/p>", ruleID: "weblogic-eap7-016000", issueName: "WebLogic InitialContextFactory",
problemSummaryID: "2e43998f-d141-44aa-85f9-eb5bf2bc7522", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=82032'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/solutions/396853", t:"How to configure an EJB client in JBoss EAP 6"},
{h:"https://access.redhat.com/solutions/161543", t:"Calling JMS resources and EJB in EAP 6 from Weblogic"},
]},
];
onProblemSummaryLoaded("2e43998f-d141-44aa-85f9-eb5bf2bc7522");
MIGRATION_ISSUES_DETAILS["43827ad6-3a8b-4cf3-b1a7-bb43966d5f72"] = [
{description: "<p>In JBoss EAP, the <code>InitialContext<\/code> should be instantiated with no arguments. Once an instance is constructed, look up the service using portable JNDI lookup syntax. Ensure also that in case system properties for <code>InitialContext<\/code> are provided, they do not need to be changed for the JBoss EAP.<\/p>\n<pre><code class=\"java\">InitialContext context = new InitialContext();\nService service = (Service) context.lookup( &quot;java:app/service/&quot; + ServiceImpl.class.getSimpleName() );\n<\/code><\/pre>", ruleID: "environment-dependent-calls-03000", issueName: "Proprietary InitialContext initialization",
problemSummaryID: "43827ad6-3a8b-4cf3-b1a7-bb43966d5f72", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=110600'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/1496973", t:"Migrate Applications From Other Platforms to Use Portable JNDI Syntax in Red Hat JBoss Enterprise Application Platform"},
]},
];
onProblemSummaryLoaded("43827ad6-3a8b-4cf3-b1a7-bb43966d5f72");
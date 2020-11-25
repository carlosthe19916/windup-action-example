MIGRATION_ISSUES_DETAILS["0cbe20cd-c5df-4116-869e-a37168a08671"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss EAP.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "0cbe20cd-c5df-4116-869e-a37168a08671", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=110600'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"2"},
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/migration_guide/#sect-JNDI_Changes", t:"JNDI Changes"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/development_guide/#chap-Remote_JNDI_Lookup", t:"JBoss EAP 6 - JNDI Reference"},
]},
];
onProblemSummaryLoaded("0cbe20cd-c5df-4116-869e-a37168a08671");
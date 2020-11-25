MIGRATION_ISSUES_DETAILS["c609edb0-19ac-4790-be8b-693932e27bca"] = [
{description: "<p><code>T3ServicesDef<\/code> provides access to core services of the container, such as Timers and Logging facilities.<\/p><p>Replace the services provided by this with a Singleton EJB (using the <code>@Singleton<\/code> annotation) that provides access to the equivalent services from JBoss EAP.<\/p>", ruleID: "weblogic-services-eap7-02000", issueName: "WebLogic T3ServicesDef usage",
problemSummaryID: "c609edb0-19ac-4790-be8b-693932e27bca", files: [
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"3"},
], resourceLinks: [
{h:"https://docs.oracle.com/javaee/7/tutorial/ejb-intro002.htm#GIPIM", t:"Java EE Tutorial - @Singleton Session Bean"},
]},
];
onProblemSummaryLoaded("c609edb0-19ac-4790-be8b-693932e27bca");
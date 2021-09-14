MIGRATION_ISSUES_DETAILS["a4c4d6e9-be44-4585-be3d-ae8802ccb188"] = [
{description: "<p>WebLogic <code>ApplicationLifecycleListener<\/code> must be replaced with standard Java EE <code>ServletContextListener<\/code> types. Otherwise, a solution using CDI\'s <code>ApplicationScoped<\/code> beans or EJB\'s <code>@Startup<\/code> beans is required.<\/p><p>Use a <code>javax.servlet.ServletContextListener<\/code> with <code>@javax.annotation.servlet.WebListener<\/code>, or an EJB 3.1 <code>@javax.ejb.Startup<\/code> <code>@javax.ejb.Singleton<\/code> service bean.<\/p>", ruleID: "weblogic-webapp-eap7-06000", issueName: "WebLogic ApplicationLifecycleListener",
problemSummaryID: "a4c4d6e9-be44-4585-be3d-ae8802ccb188", files: [
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"http://docs.oracle.com/cd/E13222_01/wls/docs90/programming/lifecycle.html", t:"WebLogic custom ApplicationLifecycleEvent Documentation"},
{h:"https://access.redhat.com/articles/1326703", t:"Migrate Oracle WebLogic Server ApplicationLifecycleListener Code to Red Hat JBoss EAP 6+"},
{h:"http://docs.oracle.com/javaee/7/api/javax/servlet/ServletContextEvent.html", t:"Java EE ServletContextEvent JavaDoc"},
]},
];
onProblemSummaryLoaded("a4c4d6e9-be44-4585-be3d-ae8802ccb188");
MIGRATION_ISSUES_DETAILS["dee50e1c-098c-48ea-8113-1ecc72e89a92"] = [
{description: "<p>WebLogic <code>ApplicationLifecycleEvent<\/code> must be replaced with standard Java EE <code>ServletContextEvent<\/code>. Otherwise, a custom solution using CDI\'s <code>ApplicationScoped<\/code> beans or EJB\'s <code>@Startup<\/code> beans is required in order to propagate a custom event object because <code>ServletContextEvent<\/code> types are not extendible in the standard Java EE programming model.<\/p><p>Use a <code>javax.servlet.ServletContextListener<\/code> with <code>@javax.annotation.servlet.WebListener<\/code>, or an EJB 3.1 <code>@javax.ejb.Startup<\/code> <code>@javax.ejb.Singleton<\/code> service bean.<\/p>", ruleID: "weblogic-webapp-eap7-05000", issueName: "WebLogic ApplicationLifecycleEvent",
problemSummaryID: "dee50e1c-098c-48ea-8113-1ecc72e89a92", files: [
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/1326703", t:"Migrate WebLogic ApplicationLifecycleEvent to standard EJB with JBoss EAP"},
{h:"http://docs.oracle.com/cd/E13222_01/wls/docs90/programming/lifecycle.html", t:"WebLogic custom ApplicationLifecycleEvent Documentation"},
{h:"http://docs.oracle.com/javaee/7/api/javax/servlet/ServletContextEvent.html", t:"Java EE ServletContextEvent JavaDoc"},
]},
];
onProblemSummaryLoaded("dee50e1c-098c-48ea-8113-1ecc72e89a92");
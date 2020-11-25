MIGRATION_ISSUES_DETAILS["a1f33ff0-a0f3-4703-b2b1-eeba01df1571"] = [
{description: "<p>After migration, some of the JMX beans provided by the previous server may not be present anymore. Ensure that the <code>javax.management.ObjectName<\/code> does not need to change for JBoss EAP.<\/p>", ruleID: "environment-dependent-calls-04000", issueName: "JMX MBean object name (javax.management.ObjectName)",
problemSummaryID: "a1f33ff0-a0f3-4703-b2b1-eeba01df1571", files: [
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"2"},
], resourceLinks: [
]},
];
onProblemSummaryLoaded("a1f33ff0-a0f3-4703-b2b1-eeba01df1571");
MIGRATION_ISSUES_DETAILS["6bd38e4a-221d-4a6f-8b75-40bb6891deb6"] = [
{description: "<p>After migration, some of the JMX beans provided by the previous server may not be present anymore. Ensure that the <code>javax.management.ObjectName<\/code> does not need to change for JBoss EAP.<\/p>", ruleID: "environment-dependent-calls-04000", issueName: "JMX MBean object name (javax.management.ObjectName)",
problemSummaryID: "6bd38e4a-221d-4a6f-8b75-40bb6891deb6", files: [
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"2"},
], resourceLinks: [
]},
];
onProblemSummaryLoaded("6bd38e4a-221d-4a6f-8b75-40bb6891deb6");
MIGRATION_ISSUES_DETAILS["12f0beb7-6add-48c2-a964-e390fa20b0b7"] = [
{description: "<p>The WebLogic <code>NonCatalogLogger<\/code> is not supported on JBoss EAP, and should be migrated to a supported logging framework, such as the JDK Logger or JBoss Logging:<\/p>\n<pre><code class=\"java\">import java.util.logging.Logger;\nLogger LOG = Logger.getLogger(&quot;MyLogger&quot;);\n<\/code><\/pre>", ruleID: "weblogic-eap7-11000", issueName: "WebLogic proprietary logger (NonCatalogLogger)",
problemSummaryID: "12f0beb7-6add-48c2-a964-e390fa20b0b7", files: [
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=82032'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"6"},
{l:"<a class='' href='ProductCatalogBean_java.html?project=82032'>com.acme.anvil.service.ProductCatalogBean<\/a>", oc:"5"},
], resourceLinks: [
{h:"https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html", t:"JDK Logging Documentation"},
{h:"https://developers.redhat.com/quickstarts/eap/logging/", t:"JBoss Logging Quickstart"},
]},
];
onProblemSummaryLoaded("12f0beb7-6add-48c2-a964-e390fa20b0b7");
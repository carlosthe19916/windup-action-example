MIGRATION_ISSUES_DETAILS["2fa34361-6bd1-4e05-a5ff-a9c1de9a4758"] = [
{description: "<p>The WebLogic <code>NonCatalogLogger<\/code> is not supported on JBoss EAP, and should be migrated to a supported logging framework, such as the JDK Logger or JBoss Logging:<\/p>\n<pre><code class=\"java\">import java.util.logging.Logger;\nLogger LOG = Logger.getLogger(&quot;MyLogger&quot;);\n<\/code><\/pre>", ruleID: "weblogic-eap7-11000", issueName: "WebLogic proprietary logger (NonCatalogLogger)",
problemSummaryID: "2fa34361-6bd1-4e05-a5ff-a9c1de9a4758", files: [
{l:"<a class='' href='ProductCatalogBean_java.html?project=110600'>com.acme.anvil.service.ProductCatalogBean<\/a>", oc:"5"},
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"6"},
], resourceLinks: [
{h:"https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html", t:"JDK Logging Documentation"},
{h:"https://developers.redhat.com/quickstarts/eap/logging/", t:"JBoss Logging Quickstart"},
]},
];
onProblemSummaryLoaded("2fa34361-6bd1-4e05-a5ff-a9c1de9a4758");
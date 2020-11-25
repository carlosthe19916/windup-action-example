MIGRATION_ISSUES_DETAILS["b72e34c6-e8e9-46af-b392-8d0714118ece"] = [
{description: "<p>Weblogic?s implementation of the RMI specification uses a proprietary protocol known as T3. T3S is the version of the protocol over SSL. <code>t3://<\/code> and <code>t3s://<\/code> URLs are used to configure a JNDI InitialContext within WebLogic.<\/p><p>The equivalent functionality needs to be configured in JBoss EAP 7. This could be done either by using standard Java EE JNDI names or by using a WebLogic proprietary library if the connectivity to WebLogic server is still required.<\/p>", ruleID: "weblogic-eap7-017000", issueName: "WebLogic T3 JNDI binding",
problemSummaryID: "b72e34c6-e8e9-46af-b392-8d0714118ece", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=110600'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebStartupListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebStartupListener<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=110600'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/solutions/1230143", t:"Invoking EJBs deployed on WebLogic from EAP6"},
{h:"https://docs.oracle.com/cd/E24329_01/web.1211/e24389/rmi_t3.htm#WLRMI143", t:"Oracle WebLogic RMI with T3"},
]},
];
onProblemSummaryLoaded("b72e34c6-e8e9-46af-b392-8d0714118ece");
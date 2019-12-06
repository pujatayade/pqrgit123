$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/jbksite.feature");
formatter.feature({
  "line": 1,
  "name": "site",
  "description": "As a user \r\nI want to open a website\r\nso that i can check menu",
  "id": "site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "check Menu of javabykiran.com",
  "description": "",
  "id": "site;check-menu-of-javabykiran.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "open a browser",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I open a jbksite"
    }
  ],
  "line": 8,
  "name": "I open a jbksite",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "career menu should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "JBKsteps.open_a_browser()"
});
formatter.result({
  "duration": 144102928,
  "status": "passed"
});
formatter.match({
  "location": "JBKsteps.i_open_a_jbksite()"
});
formatter.result({
  "duration": 21049,
  "status": "passed"
});
formatter.match({
  "location": "JBKsteps.career_menu_should_appears()"
});
formatter.result({
  "duration": 19911,
  "status": "passed"
});
formatter.uri("cucumber/newJBK.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook login smoke scenario",
  "description": "",
  "id": "test-facebook-login-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"kiran@gmail.com\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "newJBK.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 46649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 15
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "newJBK.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1764692,
  "status": "passed"
});
formatter.match({
  "location": "newJBK.user_able_to_login_successfully()"
});
formatter.result({
  "duration": 22187,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/ValtechTestQ/vatTechtestQ/src/test/java/com/valtech/vatTechtestQ/featureFiles/valtechQ.feature");
formatter.feature({
  "line": 1,
  "name": "Valtech test Question",
  "description": "",
  "id": "valtech-test-question",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5428579393,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Go to the Valtech website and check that the Latest News section is displayed",
  "description": "",
  "id": "valtech-test-question;go-to-the-valtech-website-and-check-that-the-latest-news-section-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I browse to the Valtech website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the Latest News section is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "valtechQsteps.i_browse_to_the_Valtech_website()"
});
formatter.result({
  "duration": 9778778960,
  "status": "passed"
});
formatter.match({
  "location": "valtechQsteps.the_Latest_News_section_is_displayed()"
});
formatter.result({
  "duration": 267619063,
  "status": "passed"
});
formatter.after({
  "duration": 690767272,
  "status": "passed"
});
formatter.before({
  "duration": 4611473240,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Go to the Valtech website and navigate across About, Services and Work Pages",
  "description": "",
  "id": "valtech-test-question;go-to-the-valtech-website-and-navigate-across-about,-services-and-work-pages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I browse to the Valtech website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "select a navigation button",
  "rows": [
    {
      "cells": [
        "About"
      ],
      "line": 10
    },
    {
      "cells": [
        "Services"
      ],
      "line": 11
    },
    {
      "cells": [
        "Work"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the tag displays the correct page name",
  "keyword": "Then "
});
formatter.match({
  "location": "valtechQsteps.i_browse_to_the_Valtech_website()"
});
formatter.result({
  "duration": 6501066667,
  "status": "passed"
});
formatter.match({
  "location": "valtechQsteps.select_a_navigation_button(DataTable)"
});
formatter.result({
  "duration": 125870685,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan\u003e...\u003c/span\u003e is not clickable at point (418, 36). Other element would receive the click: \u003cdiv id\u003d\"CybotCookiebotDialog\" name\u003d\"CybotCookiebotDialog\" role\u003d\"alertdialog\" aria-describedby\u003d\"CybotCookiebotDialogBodyContentTitle\" lang\u003d\"en\" dir\u003d\"ltr\" ng-non-bindable\u003d\"\" style\u003d\"display: block; opacity: 1; top: 0px; width: 100%; height: auto;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d67.0.3396.87)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-K8CC9QQR\u0027, ip: \u0027192.168.1.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\Andy\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.87, webStorageEnabled: true}\nSession ID: b03d3847cfa148b67dc1f88933338689\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.valtech.vatTechtestQ.stepDefinitions.valtechQsteps.select_a_navigation_button(valtechQsteps.java:61)\r\n\tat ✽.And select a navigation button(C:/ValtechTestQ/vatTechtestQ/src/test/java/com/valtech/vatTechtestQ/featureFiles/valtechQ.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "valtechQsteps.the_H_tag_displays_the_correct_page_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 818664908,
  "status": "passed"
});
formatter.before({
  "duration": 4550724992,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Go to the Valtech website and Navigate to the Contact Page and output how many Valtech offices there are in total.",
  "description": "",
  "id": "valtech-test-question;go-to-the-valtech-website-and-navigate-to-the-contact-page-and-output-how-many-valtech-offices-there-are-in-total.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I browse to the Valtech website",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I navigate to the Contact Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the contact us information is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I output how many valtech offices there are",
  "keyword": "Then "
});
formatter.match({
  "location": "valtechQsteps.i_browse_to_the_Valtech_website()"
});
formatter.result({
  "duration": 7074758848,
  "status": "passed"
});
formatter.match({
  "location": "valtechQsteps.i_navigate_to_the_Contact_Page()"
});
formatter.result({
  "duration": 99615886,
  "status": "passed"
});
formatter.match({
  "location": "valtechQsteps.the_page_is_displayed_correctly()"
});
formatter.result({
  "duration": 46671089,
  "status": "passed"
});
formatter.match({
  "location": "valtechQsteps.i_output_how_many_valtech_offices_there_are()"
});
formatter.result({
  "duration": 160729930,
  "status": "passed"
});
formatter.after({
  "duration": 678603856,
  "status": "passed"
});
});
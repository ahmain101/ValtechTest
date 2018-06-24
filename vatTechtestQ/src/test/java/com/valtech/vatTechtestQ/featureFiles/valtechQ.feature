Feature: Valtech test Question

Scenario: Go to the Valtech website and check that the Latest News section is displayed
Given I browse to the Valtech website
Then the Latest News section is displayed

Scenario: Go to the Valtech website and navigate across About, Services and Work Pages
Given I browse to the Valtech website
And select a navigation button
|About|
|Services|
|Work|

Then the tag displays the correct page name

Scenario: Go to the Valtech website and Navigate to the Contact Page and output how many Valtech offices there are in total.
Given I browse to the Valtech website
Given I navigate to the Contact Page
And  the contact us information is displayed
Then I output how many valtech offices there are
Feature: Login functionality

@Smoke
Scenario: Login with valid credentials

  Given User is on the login page
  When User enters valid user-name and password
  Then User should be logged in



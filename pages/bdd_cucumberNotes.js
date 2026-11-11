/*BDD(Behaviour-Driven Development) in playwright is an approach of writing test in a business readable 
format. Usually using Gherkin syntax
such as given,when then etc.
playwright is then used to automate these steps through definition

Cucumber is an BDD framework or tool, used to write a test case in a simple 
human readable language called Gherkin.

Keywords:
1.Features - Describe the functionality.
2.Scenario - Individual testcase.
3.Given - precondition / initial setup
4.When - Action
5.Then - Expected result
6.And - Additional steps

Folder Name - features
File Name - login.feature
    eg: 
    Feature : login functionality.
    SCenarion : login with valid credential.
    Given : User is in the login page.
    When : Enter valid user name and password.
    Then : User succefully navigated to the home page.

login.feature is a feature file which contains test scenarios written in BDD format
using keywords like feature,scenario, when, given,then etc.
It is written in simple english, even non-technical users can understand.

Describes application behaviour:
It explains how login functionality should work.

Folder name - step-definitions
File name - login.steps.js
login.steps.js is called step defintion file, which contains actual automation
code for each step written inside the feature file

Difference between login.feature and login.steps.js

login.feature                           login.steps.js
______________                          _______________
contain step scenarios                  contain automation code
written in english                      written in javascript
Easy for business users                 Easy for automation testing
uses given,then,when etc                use playwright+cucumber code


Hooks:
Hooks are spcl funcs, used to include for before or after scenarios.
1.BeforeAll : Runs only once before all scenarios
2.AfterAll : Executes one time after all scenarios are cmpltd.
3.Before : This hook execute before each scenario.
4.After : this hook executes after each scenario.
5.BeforeStep : This hook executes before every step in a scenario.
6.AfterStep : This hook executes after every step in a scenario.

cucumber tags:
tags are used to grp n organize test scenarios. They help as execute specific scenarios or 
feature files instead of running all test cases.

*/
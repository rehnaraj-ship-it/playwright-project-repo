Feature:inventory page validation
Scenario:verify inventory item count for different users
Given user is on saucedemo application page
When user logs in the username "<username>" and "<password>"
Then user should see the "<result>"
And inventory item count should be "<count>"

Examples:
    | username       | password     | result          | count |
    | standard_user  | secret_sauce | inventory page  |  6    |
    | locked_out_user| secret_sauce | error message   |  0    |
    | problem_user   | secret_sauce | inventory page  |  6    |
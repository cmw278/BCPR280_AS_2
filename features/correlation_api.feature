Feature: Correlation api
  The correlation api is a subset of functions made available through the restfulAPI generated in this module

  Scenario Outline: The Correlation API should respond as expected
    Given I request "/correlation"
    When I give the query "<data>"
    Then I should receive the content '<JSON response>'

  Examples:

  | data                                                                                               | JSON response                                                                      |
  | ?x=5,4,3,2,1&y=10,9,8,7,6                                                                          | {"sumXY":130,"scale":5,"r":1,"rSquared":1}                                         |
  | ?x=186,699,132,272,291,331,199,1890,788,1601&y=15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2  | {"sumXY":719914.4,"scale":10,"r":0.9543157610641518,"rSquared":0.9107185718154513} |

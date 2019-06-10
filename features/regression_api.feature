Feature: Regression api
  The regression api is a subset of functions made available through the restfulAPI generated in this module

  Scenario Outline: The Regression API should respond as expected
    Given I request "/regression"
    When I give the query "<data>"
    Then I should receive the content '<JSON response>'

  Examples:

  | data                                                                                                          | JSON response                                                                       |
  | ?x=5,4,3,2,1&y=10,9,8,7,6&nextX=24                                                                            | {"beta0":5,"beta1":1,"nextY":29}                                                    |
  | ?x=186,699,132,272,291,331,199,1890,788,1601&y=15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2&nextX=1024  | {"beta0":-0.3514937389023274,"beta1":0.09496242563609694,"nextY":96.89003011246095} |

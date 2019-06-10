Feature: ArrayMath api
  The array math api is a subset of functions made available through the restfulAPI generated in this module

  Scenario Outline: The ArrayMath API should respond as expected
    Given I request "/array"
    When I give the query "<data>"
    Then I should receive the content '<JSON response>'

  Examples:

  | data          | JSON response                      |
  | ?x=1,2,3,4,5  | {"sum":15,"squareSum":55,"mean":3} |
  | ?x=5,4,3,2,1  | {"sum":15,"squareSum":55,"mean":3} |
  | ?x=3,1,5,2,4  | {"sum":15,"squareSum":55,"mean":3} |

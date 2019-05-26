# [BCPR280_AS_2](https://github.com/cmw278/BCPR280_AS_2/)
### :bust_in_silhouette: By [Chris Wordsworth](https://github.com/cmw278/)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/cmw278/BCPR280_AS_2.svg?branch=master)](https://travis-ci.org/cmw278/BCPR280_AS_2)

---

#### A quick word on building with [Travis](https://travis-ci.org/cmw278/BCPR280_AS_2)

I thought it would be a great time to start looking into more extensive version control and build control than I'm used before, especially with my introduction to NodeJS. I ran into a little hiccup where the default node version was nowhere near the lts and thus not the same version as in my dev environment. This caused an issue convincing jasmine unit tests to run. My eventual fix (*after some trial and error*) was to add the following lines to .travis.yml:

``` yaml
node_js:
  - "lts/*"
```

These next lines also ensure package dependencies are properly met:

``` yaml
before_script:
  - npm install
```

---

#### Contents:

Task
[:one:](#1)
[:two:](#2)
[:three:](#3)
[:four:](#4)
[:five:](#5)
[:six:](#6)
[:seven:](#7)
[:eight:](#8)
[:nine:](#9)
[:keycap_ten:](#10)

---

<span id="1" hidden></span>

  - [x] :one: Write a program that calculates the correlation of two arrays of numbers
    - [x] :mag: Analysis & design
    - [x] :memo: Unit testing plan
    - [x] :pen: Write Code
    - [x] :coffee: Run unit tests
    - [x] :mortar_board: Complete documentation

---

<span id="2" hidden></span>

  - [ ] :two: Adapt / extend the first program to calculate the regression of two arrays of numbers.
    - [ ] :mag: Analysis & design
    - [ ] :memo: Unit testing plan
    - [ ] :pen: Write Code
    - [ ] :coffee: Run unit tests
    - [ ] :mortar_board: Complete documentation

---

<span id="3" hidden></span>

  - [ ] :three: Provide a user interface with Vuejs
    - [ ] :mag: Analysis & design
    - [ ] :pen: Write Code
    - [ ] :mortar_board: Complete documentation

---

<span id="4" hidden></span>

  - [ ] :four: Provide a user interface with Reactjs
    - [ ] :mag: Analysis & design
    - [ ] :pen: Write Code
    - [ ] :mortar_board: Complete documentation

---

<span id="5" hidden></span>

  - [ ] :five: Provide a user interface with Nodejs
    - [ ] :mag: Analysis & design
    - [ ] :pen: Write Code
    - [ ] :mortar_board: Complete documentation

---

<span id="6" hidden></span>

  - [ ] :six: Enhance the user interface with Bootstrap css
    - [ ] :mag: Analysis & design
    - [ ] :pen: Write Code
    - [ ] :mortar_board: Complete documentation

---

<span id="7" hidden></span>

  - [ ] :seven: Create a command line application for Nodejs that reads and writes to file
    - [ ] :mag: Analysis & design
    - [ ] :memo: Unit testing plan
    - [ ] :pen: Write Code
    - [ ] :coffee: Run unit tests
    - [ ] :mortar_board: Complete documentation

---

<span id="8" hidden></span>

  - [ ] :eight: Create a RESTful web service for Nodejs that returns JSON data
    - [ ] :mag: Analysis & design
    - [ ] :memo: Unit testing plan
    - [ ] :pen: Write Code
    - [ ] :coffee: Run unit tests
    - [ ] :mortar_board: Complete documentation

---

<span id="9" hidden></span>

  - [ ] :nine: Provide Jasminejs unit tests
    - [x] :chart_with_upwards_trend: Correlation
    - [ ] :chart_with_downwards_trend: Regression

---

<span id="10" hidden></span>

  - [ ] :keycap_ten: :cucumber: Provide CucumberJS unit tests
    - [ ] :computer: cli App  *NodeJS*
    - [ ] :envelope: RESTful Web Service  *NodeJS*

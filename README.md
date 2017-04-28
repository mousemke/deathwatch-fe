The grass is always greener
=======

Styla Javascript Frontend Project Boilerplate
----

this project includes:

+ [React](#react)
+ [Babel](#babel)
+ [Webpack](#webpack)
+ [Docker](#docker)
+ [Istanbul](#istanbul)
+ [Mocha](#mocha)
+ [Backstop](#backstop)
+ [Enzyme](#enzyme)
+ [Sinon](#sinon)
+ [Coveralls](#coveralls)
+ [eslint](#eslint)
+ [StyleLint](#stylelint)


Everyone loves to start new projects. This repo is a blank, new frontend project just for you! It's an agglomartion of Styla best practises for how to setup and organize a project. You don't have to use it in your projects in this way, but it is recommended - it makes easier for developer onboarding

Getting Started
----

Prerequisites: Install Docker and git. You might also want to install node.js, but this not stricly needed.
For Mac: Install [Docker for Mac (Stable Channel](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac) Don't install the older `docker-machine`.
For Linux: Install [Docker Engine Community Edition](https://docs.docker.com/engine/installation/). You'll also need to separately install [docker-compose](https://docs.docker.com/compose/install/)

To run it:

+ `git clone https://github.com/styladev/testable-reactions.git`
+ `cd testable-reactions` to go into the project folder
+ `docker-compose up --build` to build and run it

The "app" is available then at http://localhost:4080

To use it as a template for your projects:

+ in `backstop.json` change testSuiteName
+ in `package.json` change package, name, and author

The entry point on your new app is `./src/index.js`, which is called by `./index.html`.

Folder Structure Convention
----

`src`: main source code. Don't use `app`, even though that is comnon for React apps. `src` works for backend services and even Java projects!

`dist`: final generated files for production usage (`target` folder for Java projects).

`test`: all tests, with subfolders for `unit`, `api` or other folders for different types of tests

`docker`: anything related to docker. We used to have `docker-compose.yml` also in this folder, but it has moved to the root folder, as this is how `docker-compose` works more elegantly. 

Scripts
----

Scripts, standardized across repos, makes it easier for people to jump from one project to another.

available scripts:

| `script` | description |
|----------|-------------|
| `npm run build` | builds the dist files |
| `npm run serve` | starts the dev server on whatever port is defined in `./variables` |
| `npm run lint` | checks the js and jsx files for js and code style error |
| `npm run lintFix` | checks the js and jsx files for js and code style error and fixes them if able |
| `npm run stylelint` | checks the css files for style errors |
| `npm test` | runs unit and visual tests |
| `npm run test:unit` | runs a quick unit test |
| `npm run test:unit:coverage` | runs a unit test that determines test coverage and opens the report in a browser |
| `npm run test:unit:coverage:cli` | runs a unit test that determines test coverage and reports in the command line |
| `npm run test:visual` | runs visual regression tests and opens the report in a browser |
| `npm run test:visual:baseline` | generates baseline comparison images |
| `npm run test:visual:clean` | removes old visual test images |
| `npm run test:visual:cli` | runs visual regression tests and reports in the command line |
| `npm run test:visual:report` | opens the visual regression test report in the browser |


Contributing
----

This project adheres to the [Contributor Covenant](http://contributor-covenant.org/). By participating, you are expected to honor this code.

[Testable-Reactions - Code of Conduct](https://github.com/styladev/testable-reactions/blob/master/CODE_OF_CONDUCT.md)


Issues
----

[Please report issues here.](https://github.com/styladev/testable-reactions/issues)

+ add any specific information that can help to reproduce and resolve the bug.
    + What did you do, when the bug appeared.
    + Node, NPM, + version number
    + OS, Browser + version, resolution
+ Add a label to the issue, if possible.
    + critical -> needs fix right away (like broken build, blocks development)
    + bug -> needs fix
    + issue -> small bug, does not affect anything (small bug in UI, design issue)
    + feature -> feature request
    + question -> needs discussion
    + docs -> needs documentation
    + help wanted -> need help with implementation or fixing bug


Included package details
---

# React

React is a JavaScript library for building user interfaces.

[https://facebook.github.io/react/](https://facebook.github.io/react/)


# Babel


Babel transforms your JavaScript

ES2015 and beyond
Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support.

[https://babeljs.io/](https://babeljs.io/)


# Webpack

Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.

[https://webpack.github.io/](https://webpack.github.io/)

# Docker

A lightweight containerization tools. Main benefits to use it: Total freedom to choose whatever compiler/interpreter version you want, No need to install dependencies on dev machine, Same code in dev and production, Easy orchestration of multiple microservices.

[Docker Intro](https://docs.docker.com/get-started/)

## Docker Ports

When mapping ports from container to host in the `docker-compose.yml` file like this

```
    ports:
      - 4080:4080
```
the host port (first number) needs to be choosen wisely. It needs to be unique for all services running on one host, and since we run services on clusters, there can be a multitude of services. Only ports in the range from 4000 to 9999 are allowed due to Security Groups. Convention should be:

4xxx: general services not assigned to any one team
5xxx, 6xxx: services managed by `nyan`
7xxx, 8xxx: services managed by `doge`
9xxx: services managed by `patata`

# Istanbul

Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests

[https://www.npmjs.com/package/istanbul](https://www.npmjs.com/package/istanbul)


# Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

[http://mochajs.org/](http://mochajs.org/)


# Backstop

BackstopJS automates CSS regression testing of your responsive web UI by comparing DOM screenshots at various viewport sizes.

[http://backstopjs.org/](http://backstopjs.org/)


# Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

[http://airbnb.io/enzyme/](http://airbnb.io/enzyme/)


# Sinon

Standalone test spies, stubs and mocks for JavaScript.
No dependencies, works with any unit testing framework.

[http://sinonjs.org/](http://sinonjs.org/)


# Coveralls


Coveralls works with your CI server and sifts through your coverage data to find issues you didn’t even know you had before they become a problem.

[https://coveralls.io/](https://coveralls.io/)

# eslint

ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.

[http://eslint.org/](http://eslint.org/)


# StyleLint

A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.

[http://stylelint.io/](http://stylelint.io/)



## change log
--------

# 0.0.3

+ updated structure
+ added a fish


# 0.0.2

+ eslint added

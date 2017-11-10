Deathwatch Companion Front End
=======

This is the front end for the [Deathwatch Companion Back End](https://github.com/remigiilli/dw)

Getting Started
----

### Prerequisites:
you must have docker, git, and node installed.

#### Mac:
Install [Docker for Mac (Stable Channel](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac) Don't install the older `docker-machine`.

#### Linux:
Install [Docker Engine Community Edition](https://docs.docker.com/engine/installation/). You'll also need to separately install [docker-compose](https://docs.docker.com/compose/install/)

for Development
----
+ `git clone https://github.com/mousemke/deathwatch-fe.git` clone the project
+ `cd deathwatch-fe` move to the folder
+ `npm i` install the dependencies
+ `npm start` start the dev server

for Deployment
----

+ `git clone https://github.com/mousemke/deathwatch-fe.git` clone the project
+ `cd deathwatch-fe` move to the folder
+ `docker-compose up --build`


available scripts:
----

| `script` | description |
|----------|-------------|
| `build` | builds the dist files |
| `prettier` | runs prettier |
| `start` | starts the dev server on whatever port is defined in `./variables` |
| `test` | runs all tests |
| `test:lint` | checks the js and jsx files for js and code style error |
| `test:lint:fix` | checks the js and jsx files for js and code style error and fixes them if able |
| `test:style` | checks the css files for style errors |
| `test:style:fix` | checks the css files for style errors and fixes them if able |
| `test:type` | runs flow to test the typing |
| `test:unit` | runs a quick unit test |
| `test:unit:coverage` | runs a unit test that determines test coverage and reports in the browser |
| `test:unit:coverage:cli` | runs a unit test that determines test coverage and reports in the command line |
| `test:visual` | runs visual regression tests |
| `test:visual:debug` | runs visual regression tests with visual and console debug output |
| `test:visual:baseline` | **builds the project** and copies the files to be served on test time |
| `test:visual:clean` | removes old visual test images and the baseline. then generates a new baseline|
| `test:visual:cli` | runs visual regression tests |

#### you can run script from the docker container is already running by doing either of these:
+ login to container with `docker-compose exec testable-reations bash` and the run scripts from within container with `npm run --silent <script>`
+ run any script directly via `docker-compose exec deathwatch-fe npm run --silent <script>`.


Contributing
----

This project adheres to the [Contributor Covenant](http://contributor-covenant.org/). By participating, you are expected to honor this code.

[Deathwatch - Front End - Code of Conduct](https://github.com/mousemke/deathwatch-fe/blob/master/CODE_OF_CONDUCT.md)


Issues
----

[Please report issues here.](https://github.com/mousemke/deathwatch-fe/issues)

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

# `Angularjs - Demo`

This project is a typical [AngularJS][angularjs] demo web app used to demostrate how to deploy multiple angular apps in separated docker containers that answer under the same domain.

The app contain a menu with 3 requests: `Dogs` and `Help` are served through `UI-Router`. The `Cats` request instead, is served from other server.
So, everytime you click in that menu on dev environment, the application will redirect to the default page `Dogs`.
In a production environment, the application is deployed in an `Nginx` server and everytime you click the `Cats` menu, the app will redirect to the other server (angular8_demo server).

The app use the `html5Mode` to make easier the requests redirection.
On `dev` environment the application is started with the `superstatic` file server to allow the refresh of every request and avoid the common 404 error.
On `production` environment the static files are minified with `grunt` and deployed on `Nginx` server with `Docker`.

Every module migrated to `angular8` or other framework, should be disabled from this project to avoid errors during request redirections. For that reason, in the definition of the `angularjs` module, `myApp.cats` is not present anymore.

## Getting Started

To get you started you can simply clone the main repository and install the dependencies:

### Prerequisites

- You need git to clone the repository. You can get git from [here][git].
- I also use a number of Node.js tools to initialize and test the project. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].
- You also will need Docker to start the application.

### Clone `angular-multiversion-onedomain`

Clone the `angular-multiversion-onedomain` repository using git and move to `angularjs-demo`:

```
git clone https://github.com/yduartep/angular-multiversion-onedomain.git
cd angular-multiversion-onedomain/angularjs-demo
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.


The project use `bower` to download the angular dependencies and is configured to download it automatically before to start the app.
To install the project execute the command:

```
npm install
```

To add or change dependencies manually, modify the file `bower.json` and execute the command:

```
npm run bower-install
```

To update dependencies, execute the command:

```
npm run bower-update
```

### Development server

I have preconfigured the project with a simple development web server named `superstatic`.
This file server allow the refresh of every request and avoid the common 404 error when we use the `html5mode`.
The simplest way to start this server is:

```
npm start
```

Now browse to the app at [`localhost:8000`][local-app-url].

If you want to start the application with `Docker`, execute the command:

```
docker-compose up --build
```

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  dogs/                --> the dogs view template and logic
    dogs.html            --> the partial template
    dogs.js              --> the controller logic
    dogs_test.js         --> tests of the controller
  help/                --> the help view template and logic
    help.html            --> the partial template
    help.js              --> the controller logic
    help_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


## Testing

There are two kinds of tests in the `angularjs-demo` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `angularjs-demo` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `_test.js` suffix (e.g.
  `dogs_test.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


<a name="e2e-testing"></a>
### Running End-to-End Tests

The `angularjs-demo` app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has
special features for Angular applications.

* The configuration is found at `e2e-tests/protractor-conf.js`.
* The end-to-end tests are found in `e2e-tests/scenarios.js`.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor can
interact with it.

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

In addition, since Protractor is built upon WebDriver, we need to ensure that it is installed and
up-to-date. The `angularjs-demo` project is configured to do this automatically before running the
end-to-end tests, so you don't need to worry about it. If you want to manually update the WebDriver,
you can run:

```
npm run update-webdriver
```

Once you have ensured that the development web server hosting our application is up and running, you
can run the end-to-end tests using the supplied npm script:

```
npm run e2e
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].


## Updating Angular

Since the Angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools to easily update the dependencies. Simply run the preconfigured
script:

```
npm run update-deps
```

This will call `npm update` and `bower update`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` and `bower.json` files
respectively.


## Loading Angular Asynchronously

The `angularjs-demo` project supports loading the framework and application scripts asynchronously.
The special `index-async.html` is designed to support this style of loading. For it to work you must
inject a piece of Angular JavaScript into the HTML page. The project has a predefined script to help
do this:

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html`
page. You can run this every time you update the version of Angular that you are using.


## Serving the Application Files

While Angular is client-side-only technology and it is possible to create Angular web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The `angularjs-demo` project comes preconfigured with a local development web server. It is a Node.js
tool called [superstatic][superstatic]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g superstatic
```

Then you can start your own development web server to serve static files from a folder by running:

```
superstatic -c superstatic.json --port 8000 --host 0.0.0.0
```

If you want to start the application with `Docker`, execute the command:

```
docker-compose up --build
```

Now browse to the app at [`localhost:8000`][local-app-url].

### Running the App in Production
On `production` environment the static files are minified with `grunt` and deployed on `Nginx` server with `Docker`.

Run `docker-compose -f docker-compose.prod.yml up --build` to deploy the app in nginx server.

Now browse to the app at [`localhost:81`][prod-app-url].

## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to
your repository and execute scripts such as building the app or running tests. The `angularjs-demo`
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the
[Travis website][travis-docs] for instructions on how to do this.

## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].

[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[prod-app-url]: http://localhost:81
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
[superstatic]: https://github.com/firebase/superstatic

# Angular8 - Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version ~8.3.20.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The other way you can start the dev server is using the docker command: `docker-compose up --build`.

## Production server

Run `docker-compose -f docker-compose.prod.yml up --build` to deploy the app in nginx server.
The source code will be compiled for prod environment, minifying (css & js files) before to be deployed.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. To build the app for prod enviroment execute the command `npm run build:prod`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

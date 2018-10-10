# Angular multi-version single domain

This project demonstrates how to deploy multiple angular apps on different `Docker` containers using the same domain.
The apps are developed on different angular versions and every uri you type, will redirect to the specific server through `Nginx HTTP Proxying`.

The project is composed of two apps: `angularjs_demo` developed in angular version 1.6 and `angular6_demo` developed on angular version 6.

This project is usefull in the case you want to convert monolithic AngularJS apps to modules progressively without to stop the current development of new functionality or bug fixing.
Every new module migrated to angular 6 will replace the old one developed in angularjs.

In the `angular6_demo` app, there is a Route `guard` that redirect to `angularjs` app those requests not implemented yet, avoiding the router manage the uri internally.

In the `angularjs_demo` app, when you click in a menu belong to a module already migrated to angular 6, the page will be redirected to the angular 6 page.

![Demo](https://github.com/yduartep/angular-multiversion-onedomain/blob/master/demo-multi-version.gif)

## Download the project
First of all download the source code. Clone the Github repository executing the command:

`git clone https://github.com/yduartep/angular-multiversion-onedomain.git`

## Development server

Run `docker-compose up --build` to start the dev server of both apps.

Navigate to `http://localhost:4200/` to access the angular app developed in angular version 6.
Navigate to `http://localhost:8000/` to access the angular app developed in angular version 1.6.
Both apps will be reloaded if you change any of the source files.

If you want to start just one of them, you could move to the folder of the specific project and execute the command `npm start`.

## Production server

Run `docker-compose -f docker-compose.prod.yml up --build` to deploy both apps in nginx server.
The source code of the `angularjs_demo` app will be minified (css & js files) before to be deployed.
The source code of the `angular6_demo` app will be compiled for prod environment before to be deployed.

Navigating to `http://localhost/` the `angularjs_demo` app will be served by default.
The `/dogs` and `/help` requests will be served on the `angularjs_demo` app and the `/cats` requests will be served on the `angular6_demo` app.
These redirections are achieved using `Nginx HTTP Proxying`.
# Angular multi-version single domain

This project demostrates how to deploy multiple angular apps developed on different versions using the same domain as a unique app.

The project is composed of two apps: `angularjs_demo` developed in angular version 1.5 and `angular6_demo` developed on angular version 6.
This project is usefull in the case you have an AngularJs application and you want to migrate it progressively into angular 6.
Every new module migrated to angular 6 will replace the old one developed in angularjs.

## Download the project
First of all download the source code. Clone the Github repository executing the command:

`git clone https://github.com/yduartep/angular-multiversion-onedomain.git`

## Start Development server

Run `docker-compose up --build` to start the dev server of both apps.

Navigate to `http://localhost:4200/` to access the angular app developed in angular version 6.
Navigate to `http://localhost:8000/` to access the angular app developed in angular version 1.5.
Both apps will be reloaded if you change any of the source files.

## Start Prod server on Nginx

Run `docker-compose -f docker-compose.prod.yml up --build` to deploy both apps in nginx server.
The source code of the `angularjs_demo` app will be minified (css & js files) before to be deployed.
The source code of the `angular6_demo` app will be compiled for prod environment before to be deployed.

Navigate to `http://localhost/` to access the angular app developed in angular version 1.5.
All the dogs requests will be served on the angularjs server and all the cats requests will be served in the angular6 server using `nginx proxy-reverse`.

![Build Status](https://travis-ci.org/yduartep/angular-multiversion-onedomain.svg?branch=master)

# Angular multi-version single domain

This project use some `micro-frontend` concepts to demonstrates how to deploy multiple angular apps on different `Docker` containers responding under the `same domain`. The apps are developed on different angular versions and the static content are served from different servers depending of the request typed. This is achieved through the use of `Nginx HTTP Proxying`.

The project is composed of two apps: `angularjs_demo` developed in angular version 1.6 and `angular6_demo` developed on angular version 6.

This project is usefull in the case you want to convert monolithic AngularJS apps to modules progressively without to stop the current development of new features or bug fixing.
Every new module migrated to `angular` >= 2 will replace the old one developed in `angularjs`. This solution could be applied with any other framework. You could have a module migrated to `angular` >=2, another module migrated to `reactjs` and other on `vue` and have the same result.

## Redirections
In development environment, the apps are served in different ports, so, the redirections for every request should be implemented manually. What I have done is to configure 2 environment vars: `hostByRequest` to set the host where should be redirected the typed request and `routesToRedirect` that specifies which requests will be redirected. The rest of the requests will be managed by the application route internally. This check is executed on every route change. In `angular6_demo` app, there is a `route guard` that implements this. In `angularjs_demo` app this check is executed listening the event $stateChangeStart.

In production environment, 3 `Nginx` servers are started. The first one, acts as a proxy server and redirect every request to a different client server depending of the request typed. In the another 2 `Nginx` servers, the `angularjs` and `angular 6` app are deployed respectively. The configuration of the proxy server will be like this:

```
nginx.conf

worker_processes 4;
events { worker_connections 1024; }
http {
    sendfile on;

    upstream angular6-nginx {
        server angular6_app:80;
    }
    upstream angularjs-nginx {
        server angularjs_app:80;
    }

    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass         http://angularjs-nginx/;
            proxy_redirect     off;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Host $server_name;
        }

        location /cats/ {
            proxy_pass          http://angular6-nginx/;
            proxy_redirect      off;
            proxy_set_header    Host $host;
            proxy_set_header    X-Real-IP $remote_addr;
            proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header    X-Forwarded-Host $server_name;
        }
    }
}
```

Note: Every module you migrate from `angularjs` should be removed from the module definition because when you start the application on production environment the routes are managed by the nginx server non by the internal application route and the server will try to load the new module from angularjs but the angular6 static content will be served and you will have a loading error. Read the [Use Case](#use-case) section to know more.

## Common Components
Every common component like `Header` or `Footer` should be implemented using `Web Components` to be able to share the same components between all the apps that compose the project.

# Use case
Let's see how the project works.
Imagine I have an `angularjs` project with 4 modules: **dogs**, **cats**, **help** and **version** and I want to migrate the *cats* module to angular 6. My angular module will look like this:

**angular.js**
```
angular.module('myApp', [
    'ui.router',
    'environment',
    'myApp.dogs',
    'myApp.cats',
    'myApp.help',
    'myApp.version'
]);
```

When I start the app, the index.html file will be loaded and all the necessary js and css files will be loaded too.

**index.html**
```
<script src="bower_components/angular/angular.js"></script>
...
<script src="app.js"></script>
<script src="dogs/dogs.js"></script>
<script src="dogs/dogs.service.js"></script>
<script src="help/help.js"></script>
<script src="cats/cats.js"></script>
<script src="cats/cats.service.js"></script>
<script src="components/version/version.js"></script>
<script src="components/version/version-directive.js"></script>
<script src="components/version/interpolate-filter.js"></script>
```

Every navigation will be managed directly by the **ui-router** (in dev and prod environment).

Then, I develop a new app in angular6 to implement the *cats* module and what I would like to achieve is:
- If I go to /dogs and /help I want to load the static content from the angularjs server.
- If I go to /cats I want to load the static content from the angular6 server.

To manage this on dev environment I will create a manual redirection system to redirect every request when the route changes. On prod environment, I will configure a proxy server to serve the static content of every request from a different server. 

If my angular module and index.html file stays invariant, on prod environment I will have a problem. During the angularjs loading phase the application will try to load the **myApp.cats** module, this automatically will try to load the files **cats.js** and **cats.service.js** but from the `angular6` server as defined on the proxy server and you will have the following error:

![Loading Error](https://github.com/yduartep/angular-multiversion-onedomain/blob/master/docs/Loading_Error.png)

If you open the source in the Chrome Inspector you will see that the index.html file is loaded from the `angular6` server but  the rest of the static content served comes from the `angularjs` server.

![Source Inspector](https://github.com/yduartep/angular-multiversion-onedomain/blob/master/docs/Loading_Error_Source.png)

To avoid this behaviour, It's necessary to remove the **Cats** module from the app.js file and the **cats.js** and **cats.service.js** files from index.html on the `angularjs` app. Now my app.js and index.html file will become:

**angular.js**
```
 angular.module('myApp', [
    'ui.router',
    'environment',
    'myApp.dogs',
```
   ~~'myApp.cats',~~ <br/>
```
    'myApp.help',
    'myApp.version'
 ]);
```
**index.html**
```
<script src="bower_components/angular/angular.js"></script>
...
<script src="app.js"></script>
<script src="dogs/dogs.js"></script>
<script src="dogs/dogs.service.js"></script>
<script src="help/help.js"></script>
```
~~<script src="cats/cats.js"></script>~~ <br/>
~~<script src="cats/cats.service.js"></script>~~ <br/>
```<script src="components/version/version.js"></script>
<script src="components/version/version-directive.js"></script>
<script src="components/version/interpolate-filter.js"></script>
```

## Demo image
![Demo](https://github.com/yduartep/angular-multiversion-onedomain/blob/master/demo-multi-version.gif)

# Getting Started

To get you started you can simply clone the main repository and install the dependencies:

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

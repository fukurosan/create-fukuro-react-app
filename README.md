# create-fukuro-react-app

## Installation & Usage

Install globally* and create a new application:
```
npm install -g create-fukuro-react-app
cd dir/where/I/want/my/project
create-fukuro-react-app app-name
cd app-name
npm start
```

\*`create-fukuro-react-app` is reliant on [`create-react-app`](https://github.com/facebookincubator/create-react-app). Please ensure that npx is installed.

## What is this?

#### A `create-react-app` wrapper

Or in other words, a React project boilerplate. This project gives you the power of `create-react-app` and will **not** eject your project. On top of `create-react-app` you will get a few extra things to quickly get you going with your new project.

#### Libraries 
The following libraries will be installed on top of create-react-app
-  [react-router-dom](https://www.npmjs.com/package/react-router-dom)
-  [node-sass](https://github.com/sass/node-sass)
-  [axios](https://github.com/axios/axios)
-  [highcharts](https://github.com/highcharts/highcharts)
-  [bootstrap](https://getbootstrap.com/)
-  [jquery](https://jquery.com/) (necessary for bootstrap to fully work)
-  [popper.js](https://popper.js.org/) (necessary for bootstrap to fully work)
  
#### Folder structure
A folder structure will be created:
```
+-- src
|   +-- Assets (Files, css)
|		+-- Img
|		+-- Styles
|   +-- Components
|		+-- Layout
|		+-- Pages
|   +-- Contexts (React context providers)
|   +-- Data (Local test data for you application)
|   +-- Services (APIs, etc)
```
#### A coding template
A few files will be written in order to create a template of code to get your project jumpstarted. This includes:

- React-router-dom implemented with 2 different test-pages and a 404
- React Context API implementation ready to go
- SCSS files for variables and mixins
- Highcharts chart example
- Bootstrap imported in app.js
- Basic layout with a bootstrap navbar
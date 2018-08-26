Rendering Surveys - with React & Redux
========

## Overview
**WIP**

A React/Redux project that pulls in survey data from an API and renders it across the app.
The survey data is a central theme to the app - it will be reused throughout the project, so building Redux into the app early on allows future components to seamlessly manipulate and display that state (add, edit, remove etc).

I experimented with using a mock API that also serves the client app:

**In Development**
by using webpack-dev-server to proxy the API requests

**In Production**
by simply using the API server to also serve static client files

## To run the app locally (Node/npm)

0. Clone/DL the repository

*From the root directory*
1. Install the dependencies for the server AND client

`npm run setup`


**Dev ENV**

2. Boot up a concurrent server & client

`npm start`


**Production**

2. Bundle the client into a build folder:

`npm run build`

3. Start the server:

`npm run server`

4. View the site at localhost:3000

## Redux DevTools
**For Bonus Points**
Install the Redux DevTools Extension
>[Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

>[Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

Then open up the **DevTools** on the localhost and navigate to the **Redux** tab to view all of the Redux state changes based on your actions.

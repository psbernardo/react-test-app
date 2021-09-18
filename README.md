# Clearing System

Built with [React](https://facebook.github.io/react/), [Material-UI](https://material-ui.com), [React Router](https://reacttraining.com/react-router/).
**No jQuery and Bootstrap!**

## Development Quick Start Guide

### 0. Configuration

In order to specify the backend API endpoint, place a file `public/env.js` with the content below.

```
window.env = {
    GRPC_ENDPOINT: 'http://localhost:9004',
    GRPC_CLIENT_ID: 'tzero.softwarealgo.com',
}
```

The template is in `public/env.dev.js`

### 2. Run `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

### 3. Run `npm start`

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

### 4. Run `npm build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!.

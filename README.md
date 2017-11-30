# Logistic App

  Tiny React App  using the following stack:
  * React
  * Router
  * Redux
  * Redux-Thunk

## TODO(in case it was an production app):

* Move sensitivy data to environment variables
* Implement Websockts to push data to UI from server side
* Implement better test suit
* Write test to all Components/Containers
* Better error handling for failing API calls
* store session in localStore

## Requirements

[Yarn](https://yarnpkg.com/lang/en/docs/install/)(recommend:0.27.5+)

## Getting Started
  First step is to install all the packages required by the procjet.
  `yarn isntall`

  Then you will need two terminal windows to run the whole app, 1 terminal
  for the backend another one to the frontend.

  From the project root directory:
  in one therminal: `yarn start_backend`
  in the other: `yarn start`

  visit `http://localhost:3000/`

## Available Scripts

In the project directory, you can run:

### `Yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `Yarn test`

Runs the tests and watch for files change.

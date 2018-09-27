# Blue Oyster OCR Client

This is a [React WEB](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) client for Blue Oyster OCR.

- A shared React and React Native structure
- Flux architecture with [Redux](https://redux.js.org/docs/introduction/)
- Routing and navigation with [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile and [React Router](https://github.com/ReactTraining/react-router) for WEB
- Data Caching / Offline with [Redux Persist](https://github.com/rt2zz/redux-persist)
- UI Toolkit/s with [Native Base](https://nativebase.io/) for native mobile and [Bootstrap](https://getbootstrap.com/) for web
- Simpler mobile app development through [Expo](https://expo.io/)

## 🚀 Getting Started

The recommended Node version: `v8.11.3`

Install dependencies:

    yarn i

### 1. Run the _WEB_ app

Start development live-reload server:

    yarn web

Start production server:

    yarn web-bundle

### 2. Run the _mobile_ App

Download the [Expo](https://expo.io/) application on your phone.
Make sure your phone is in the same network as your computer.

Start development live-reload server:

    yarn start


#### 1. Clone and Install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before `yarn start`._

```bash
# Clone the repo
git clone https://github.com/mcnamee/react-native-starter-kit.git

# Install dependencies
yarn install
```

#### 2.1. Run the _React Native_ App

```bash
# Start the React Native packager
yarn start
```

Instructions are shown in the terminal. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

#### 2.2. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
yarn run web
```

Via webpack, starts a localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux


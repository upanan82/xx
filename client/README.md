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

### Run the _WEB_ app

Start development live-reload server:

    yarn web

Start production server:

    yarn web-bundle
    
Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux.

### Run the _mobile_ App (Expo app)

Download the [Expo app](https://expo.io/) on your phone.
Make sure your phone is in the same network as your computer.

Start development live-reload server:

    yarn start

Then follow the instructions from the console.

### Run the _mobile_ App (emulator)

With emulator for android:

    yarn android
    
With emulator for IOS:

    yarn ios



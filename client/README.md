# Blue Oyster OCR Client

This is a [React WEB](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) client for Blue Oyster OCR.

- A shared React and React Native structure
- Flux architecture with [Redux](https://redux.js.org/docs/introduction/)
- Routing and navigation with [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile and [React Router](https://github.com/ReactTraining/react-router) for WEB
- __Data Caching / Offline__
    - [Redux Persist](https://github.com/rt2zz/redux-persist)
- __UI Toolkit/s__
    - [Native Base](https://nativebase.io/) for native mobile
    - [Bootstrap](https://getbootstrap.com/) for web
- __Simpler mobile app development__ through
    - [Expo](https://expo.io/)
- __User authentication__ example through
    - [Firebase](https://firebase.google.com/)
- __API/Data example__
    - Shows how to read/write data from/to an external API (in our case, [Firebase](https://firebase.google.com/))
- __Code Linting__ with
    - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

---

## 📖 Docs

- [Setup your own Firebase](/docs/firebase.md)
- [Understanding the file structure](/docs/file-structure.md)
- [FAQs & Opinions](/docs/faqs.md)
- [Testing, Deploying & Publishing](/docs/publishing.md)
- [Tests & testing](/docs/testing.md) (coming soon...)
- [Contributing to this project](/docs/contributing.md)

---

## 🚀 Getting Started

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


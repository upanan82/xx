Blue Oyster OCR API
==================================

This is a Express & ES6 REST API for Blue Oyster OCR.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).



Getting Started
---------------

Development Node Version: `v8.11.3`

Install dependencies:

    npm install

Start development live-reload server:

    npm run dev

Start production server:

    npm start

You can also use the same commands with [Yarn](https://yarnpkg.com/en/):

```sh
# Dependencies
yarn i

# Development server
yarn dev

# Or production server
yarn start
```



Build
---------------

Server build:
```sh
npm run build

# Or with Yarn
yarn build
```



Testing
---------------

Start testing with [ESLint](https://eslint.org/):
```sh
npm run test

# Or with Yarn
yarn test
```

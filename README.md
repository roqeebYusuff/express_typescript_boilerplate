# Express JS Boilerplate with Typescript and MongoDB

## Description
This is a boilerplate for Express JS with Typescript and MongoDB. It is a simple CRUD application with a single model. It is a good starting point for any Express JS application with Typescript and MongoDB.

## Installation
1. Clone the repository
2. Configure the environment variables in `.env` file from `.env.example` file
3. Run `yarn` to install the dependencies
4. Run `yarn dev` to start the development server
5. Run `yarn build` to build the project
6. Run `yarn start` to start the production server
7. Run `yarn test` to run tests

## Features
- Basic Doc creation with **mongoose**
- Unit tests with **mocha**

## Folder Structure

```
├── README.md
├── package.json
├── .gitignore
├── .env.example
├── tsconfig.json
├── src
│   ├── app.ts
|   ├── server.ts
│   ├── config
│   │   └── db.ts
|   |   └── env
│   │       └── index.ts
|   |       └── schema.env.ts
|   |       └── validator.env.ts
│   ├── controllers
│   │   └── auth.controller.ts
|   ├── interfaces
│   │   └── auth.interface.ts
│   ├── database
│   │   └── database.ts
│   ├── middlewares
│   │   └── verifyRequest.ts
│   ├── models
│   │   └── user.ts
│   ├── routes
│   │   └── auth.route.ts
|   ├── └── index.ts
│   ├── services
│   │   └── auth.service.ts
│   └── tests
|       └── connect.test.ts
|   └── utils
│       └── utils.ts
```

## License
MIT

## Author
[Roqeeb Yusuff](https://github.com/roqeebYusuff)
# Password Validation Project

![build status](https://github.com/kevinppaulo/QventusPass/actions/workflows/firebase-hosting-merge.yml/badge.svg)


![Working gif](https://i.imgur.com/EvdcqTv.gif)

This is a sample project demonstrating password field validation using React with TypeScript, styled-components for styling, and react-testing-library with Jest for unit testing. The project provides a password input field with various validations, allowing users to check if their password meets specific criteria.

## Hosting
This project is hosted using Firebase Hosting and is accessible [Here](https://qventus-4ef7b.web.app/). The app may take a while to load at first due to cold start on the firebase server.

## Features

The password field accepts a list of validations, making it customizable to each project's needs. By default, the components feature a set of standard validations such as the ones mentioned bellow.

- Password must contain at least one numeral (0-9).
- Password must contain at least one special character.
- Password must contain at least one uppercase letter.
- Password must not have consecutive characters.


## Getting Started

Follow these steps to clone and run the project on your local machine:

### Prerequisites

Make sure you have Node.js and npm or yarn installed on your system. You can download and install them from the official [Node.js website](https://nodejs.org/).

### Clone the Repository

```bash
git clone git@github.com:kevinppaulo/QventusPass.git
cd QventusPass
```

### Install Dependencies
```bash
yarn i
```

### Start the Development Server
To start the development server, run the following command:

```bash
yarn dev
```

This will launch the application in development mode. You can access it at http://localhost:3000.

### Testing
To run the unit tests using Jest and react-testing-library, use the following command:

```bash
yarn test
```

### Building
If you want to build the project for production, you can use the following command:

```bash
yarn build
```

This will generate the production-ready build in the `dist` directory.

### Usage
Enter a password in the password input field.
As you type, the validation indicators will update to show whether the password meets the specified criteria.
The indicators will display either a checkmark (✔) if the criteria are met or an 'x' if they are not.

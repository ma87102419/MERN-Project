# MERN-Project

## Demo

https://mern-project-production.up.railway.app/

## Description

> User can register as student or instructor. Students can register courses and instructors can create courses.

### Server side: node.js

- used Joi validation to register and login
- used JSON Web Token to perform stateless authentication to protect routes
- Cross-Origin Resource Sharing (CORS) allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### Client side: react

- axios: Promise based HTTP client for the browser and node.js

## Execution

```
node server.js
cd client
yarn start
```

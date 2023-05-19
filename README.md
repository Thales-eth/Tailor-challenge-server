# Let Him Cook Server 

"Let Him Cook" platform that #####

# Deployed API

The deployed API can be found at the link: "####"

All the routes described in the "API Routes" section are valid endpoints against this URL. For example, "####"

The complete deployed application can be found at the following link: "####"

# Environment Variables

If the project is to be run locally, a .env file must be created in the root directory.

This file must include all of these environment variables:

- PORT
- MONGODB_URI
- ORIGIN
- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET
- TOKEN_SECRET
- SALT

To install all the dependencies used in the project, simply run the command:
```
npm install
```

# Postman Collection

In the root directory of the project, you will find a JSON file called "####". Throughout the development of this project, Postman is used to test our API. This file can be imported directly as a collection in Postman to view all the testing work. The requests are organized by folders according to their corresponding routes. Each request includes different examples of responses and error handling.

# API Routes

## **Restaurants routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/restaurants/...             | GET               | [users]                           | Get Home Page Displayed Users     |

## **User routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/users/...            | GET               | [users]                           | Get Home Page Displayed Users     |

## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/getLoggedUser            | GET              | {user}    | Get Logged User             |
| /api/auth/signup            | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/auth/login             | POST              | `Token`    | Log user in             |
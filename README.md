# LET HIM COOK: built using MENN STACK (Mongo, Express, Next.JS, Node)

Let Him Cook is a MENN app that displays some of the coolest restaurants around the world and allows
experienced users to create more restaurants and display them on the web. 

# Deployed API

The deployed API can be found at the link: "https://tailorchallenge.fly.dev"

All the routes described in the "API Routes" section are valid endpoints against this URL. For example, "https://tailorchallenge.fly.dev/api/restaurants/list"

The complete deployed application can be found at the following link: "https://tailor-challenge-client-rho.vercel.app"

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

To install all the dependencies used in the project, simply run the command!:
```
npm install
```

# Postman Collection

In the root directory of the project, you will find a JSON file called "Tailor_Challenge.postman_collection.json". Throughout the development of this project, Postman is used to test our API. This file can be imported directly as a collection in Postman to view all the testing work. The requests are organized by folders according to their corresponding routes. Each request includes different examples of responses and error handling (if needed).

# API Routes

## **Restaurants routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/restaurants/list       | GET               | [restaurants]                     | Get all restaurants     |
| /api/restaurants/getOne/:restaurant_id            | GET               | {restaurant}                | Get one Restaurant     |
| /api/restaurants/create/:user_id            | POST               | {createdRestaurant}                | Create Restaurant      |
| /api/restaurants/edit/:restaurant_id            | PUT               | {editedRestaurant}                | Edit one restaurant     |
| /api/restaurants/delete/:restaurant_id/:user_id           | DELETE               | {msg: "Restaurant successfully deleted!" }                | Delete one restaurant     |

## **User routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/users/getFavoriteRestaurants              | GET               | [restaurants]                           | Get logged user's favorite restaurants |
| /api/users/likeRestaurant/:restaurant_id              | PUT               | {updatedUser}                           | Like Restaurant |
| /api/users/dislikeRestaurant/:restaurant_id              | PUT               | {updatedUser}                           | Dislike Restaurant |

## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/getLoggedUser     | GET               | {loggedUser}                            | Get Logged User             |
| /api/auth/signup            | POST              | {createdUser}    | Create a new user             |
| /api/auth/login             | POST              | {authToken}                       | Log user in             |

## **Upload routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/upload     | POST               | CLOUDINARY_LINK                            | Upload Image to Cloudinary

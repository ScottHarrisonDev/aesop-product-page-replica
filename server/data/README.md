# Aesop Replica Page Server

This is an Express server which serves up the content, navigation and product details for the replica front end Vue app.

## Install
1. Clone the Git repository.
2. Open a terminal at the project root and run `yarn install`, this will install all the dependencies for the project.
3. From the project root run `yarn start` to start the server. You should see a message to say the 'API Server is running @ http://localhost:8000'. You can now develop locally.

## Deploy
1. Ensure your environment has the NODE_ENV set appropriately. This can usually be done within the interface of your hosting platform (AWs, Heroku, Digital Ocean etc.).
2. Clone the Git repository (Some hosting platforms will handle this for you).
3. Run `yarn install` from the server directory, this will install all the dependencies for the project.
4. Run `yarn build` from the server directory, this will compile the project into JavaScript.
5. Run `node build/index.js` to run the compiled code.

## Endpoints
- `/content/product-page` - Returns a list of content, meta details and layout

Method: GET

Request parameters: None

Response format: JSON

***

- `/navigation/main` - Returns the main navigation links

Method: GET

Request parameters: None

Response format: JSON

***

- `/products/in-two-minds-facial-cleanser` - Returns the product details 

Method: GET

Request parameters: None

Response format: JSON

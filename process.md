# Development process
Below I will outline my process through developing this project and discuss my reasoning behind any decisions I make along the way.

## Initial thoughts
- VueJS front end app created using Vue CLI
- Tailwind for styling
- Have an app folder for the VueJS project and a server folder for the NodeJS server
- Use fetch for API requests on the front end (I used to use Axios but I would always prefer to use a native solution if available, scalable and supported by browsers which fetch is)
- Use Express for the NodeJS server
- TypeScript instead of JavaScript for strongly typed code
- Yarn for the package manager (I used to use npm but after doing some research last year it seemed that Yarn was better in a number of ways including performance and generally seems to offer a simpler, cleaner experience)
- Mobile first approach for the front end styling

## Process
This is the process I followed when completing this project
1. Create the repository in GitHub
2. Clone the repository to my local machine
3. Create project structure (app and server folders)
4. Ran `yarn init` and setup the package.json within the server folder
5. Add dependencies such as express, typescript, nodemon to get a suitable NodeJS dev environment set up
6. Create a tsconfig.json to configure TypeScript
7. Create index.ts which will be the entry point for the Express server with a simple test endpoint
8. Run `yarn start` to verify everything is working as expected
9. Create src/controllers/content.controller.ts to handle all content related endpoints (In a production API there may be content, products, blog posts etc.)
10. Update index.ts to use the new content controller
11. Run server via `yarn start` and verify the /content/navigation route is working
12. After reading the brief again I realised that having a controller for each type of data that needs to be returned would be much wiser so I refactored the code to be in content, navigation and products controllers (Rather than just the single content controller)
13. Plan out what data I need from the API and the best way to structure the JSON
14. Write the JSON files which will hold the content for the page in data/content.json, data/navigation.json and data/product.json. In a production app the backend would fetch the data from the CMS API or from a database
15. Create a service for each of the models (content, navigation, products) that allows us to have a single file to tweak if we switch data source in future. For example if I removed the JSON files and wanted to use an external API I would just update the service to handle this and everything else in the code can stay the same as it just consumes the data in a known format
16. Create an interface for each of the return types which is used in the services
17. Verify that all of the endpoints are working as expected by browsing to the endpoint (or using software such as Postman)

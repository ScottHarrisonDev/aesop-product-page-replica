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

Server build
1. Ran `yarn init` and setup the package.json within the server folder
2. Add dependencies such as express, typescript, nodemon to get a suitable NodeJS dev environment set up
3. Create a tsconfig.json to configure TypeScript
4. Create index.ts which will be the entry point for the Express server with a simple test endpoint
5. Run `yarn start` to verify everything is working as expected
6. Create src/controllers/content.controller.ts to handle all content related endpoints (In a production API there may be content, products, blog posts etc.)
7. Update index.ts to use the new content controller
8. Run server via `yarn start` and verify the /content/navigation route is working
9. After reading the brief again I realised that having a controller for each type of data that needs to be returned would be much wiser so I refactored the code to be in content, navigation and products controllers (Rather than just the single content controller)
10. Plan out what data I need from the API and the best way to structure the JSON
11. Write the JSON files which will hold the content for the page in data/content.json, data/navigation.json and data/product.json. In a production app the backend would fetch the data from the CMS API or from a database
12. Create a service for each of the models (content, navigation, products) that allows us to have a single file to tweak if we switch data source in future. For example if I removed the JSON files and wanted to use an external API I would just update the service to handle this and everything else in the code can stay the same as it just consumes the data in a known format
13. Create an interface for each of the return types which is used in the services
14. Verify that all of the endpoints are working as expected by browsing to the endpoint (or using software such as Postman)

App build
1. Now I have a working API to use I'm going to start the VueJS app build. I was initially intending to use Vue CLI to setup the VueJS app however I think NuxtJS is how I'm going to build the app. I initially thought NuxtJS would be overkill for this project however it would provide a lot of helpful utilities. I run `yarn create nuxt-app app` from the repository root to get started. I originally wanted to use TypeScript for the front end of this project too but in the interest of time I have decided to stick with JavaScript for the front end.
2. Once I've got the initial NuxtJS app created I'll run `npx tailwindcss init` to publish my tailwind.config.js to setup the variables for this project
3. I'm adding the colours I can find in the Aesop web page to the TailwindCSS config file so I have access to these in the codebase.
4. I download the font files from the Aesop website via the Chrome dev tools and import them into my assets/fonts folder. I then create the assets/css/tailwind.css file and add my font face declarations for the three new fonts.
5. I load the app in the browser and use the dev tools to set the font-family to these new fonts to confirm it is working as expected
6. I download the Aesop favicon and replace the NuxtJS favicon in the project
7. I remove the default NuxtJS components
8. I plan out which components this page will need and how I will break the page down. This will sort of reflect the structure of the data returned from the API but with additional components for the cart, modal etc. which are not sent by the API. Also the layout and order of these components can change based on the API response but once I have each component built individually I can add that functionality in.
9. I've just realised that I have not got any meta information in the API for the product such as HTML title, description etc. I have made a note and will come back and add these.
10. I realise that I have not added pug to this project yet so I add the pug and pug-loader dependencies which allows me to use pug within the templates. I prefer the quicker speed and cleaner code of pug.
11. I start to build the Banner component, using generic copy for the time being, which will be replaced by the API content later
12. Tailwinds default separator is ":" which doesn't play well with the pug compiler so I switched this to be "_" in the tailwind.config.js file.
13. For the hover state of the banner button I need to add a bottom border on hover however TailwindCSS doesn't offer hover states on border properties by default so I have to add this in the tailwind.config.js file.

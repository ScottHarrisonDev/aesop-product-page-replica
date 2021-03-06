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
14. Once I have fleshed out the Banner component and before I move on to the next component I add the background colour and text colour to the body element of the page. This is so that if for some reason the page is shorter than the viewport of the device, the footer doesn't look like a band across the middle of the page, the footer will just continue to the bottom of the viewport.
15. I move on to developing the Navigation component. I need to use a tailwind class which has a slash in it (.w-1/3) and slashes also don't work with the pug compiler so I extend the default width properties with '1_3' so I can use the class .w-1_3 which works fine.
16. I've also just realised I will need to add the Aesop logo image url to the API too, I've made a note and will add this later
17. I just added a custom spacing property to the tailwind config file and realised that I had accidentally been overriding the tailwind width and spacing properties rather than extending the defaults so I correct that within the tailwind config
18. I've now completed fleshing out the Product component so will go on to the CTA component below
19. I noticed that my app doesn't quite line up exactly with the Aesop website, after investigating it seems that there is a minimum height set on the product area of the page, this is set to 85vh on the Aesop website so I replicate this on my app and it looks much closer
20. I am now going to move on to the Gallery component
21. I ended up doing both the Gallery and Instructions component at the same time as they are side by side on desktop. I originally wanted to approach this app from a mobile first point of view but ended up going for desktop first as I am more comfortable and familiar with it.
22. I built out a basic related product component with mock data for now.
23. I'm going to build a simple footer so the page looks more complete
24. I created a main.js file in the store folder that will be where I make the API requests and save them to the VueX store
25. I added an action and mutation for each of the endpoints I will be calling and add the request to the action. I decided to use NuxtJS's axios library in the end as it was the simplest way to get something up and running
26. Now that I have all the content being read into the app I'll go through and make sure all of the components are using the dynamic data from the API
27. Whilst hooking up components to the API data I optimised the code and created smaller simple components for less repeatability
28. I'm conscious that I'm running low on time so I am going to focus on the main criteria mentioned in the spec which is:
- Product size switcher
- Shopping cart - add/remove from cart, change quantity.
- Open and close cart
29. I'll start with the size switcher as I've already got the UI started. The next step is to build the custom radio buttons.
30. After creating the radio buttons I then hooked up the buttons to actually change the state and set the selected size.
31. Now that I could see the app reacting to the state change I could see that the product image needed a transition to match the Aesop website. I used the Vue `<Transition>` component for this.
32. I went back and added the html title and description meta tag data to the API and used the head NuxtJS method in the index page to apply it.
33. I am now going to work on the cart functionality, starting with getting the empty cart to display when a user clicks the cart button whilst it is empty.
34. With the empty cart created I can now work on adding an item to the cart. I've realised whilst I have an ID on the product object I need to have some way of identifying the specific product variation which is being added, ie 100ml or 200ml. I am going to add an SKU field to the product API endpoint so that I have a unique identifier for each variation.
35. I've completed the cart functionality as much as I can in the time I have so I'm going to tidy up the last couple of bits including trying to make the page a bit nicer on mobile/smaller devices as I've been quite focused on the desktop experience for this project so far
36. Now the website is somewhat responsive I am going to write the README.md's for the project

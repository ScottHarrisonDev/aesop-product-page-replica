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

## Process
This is the process I followed when completing this project
1. Create the repository in GitHub
2. Clone the repository to my local machine
3. Create project structure (app and server folders)
4. Ran `yarn init` and setup the package.json within the server folder
5. Add dependencies such as express, typescript, nodemon to get a suitable NodeJS dev environment set up
6. Create a tsconfig.json to configure TypeScript

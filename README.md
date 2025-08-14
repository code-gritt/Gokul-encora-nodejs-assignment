Simple Node.js Express API
This is a simple Node.js application built with Express that provides three API endpoints (/1, /2, /3) to return JSON objects containing id, name, and age.
Project Structure
simple-node-app/
├── api/
│   └── index.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md


api/index.js: The main Express application with API routes.
package.json: Defines project dependencies and scripts.
vercel.json: Configures Vercel routing for deployment.
README.md: This file, explaining how to run the project.

Prerequisites

Node.js: Version 18.x or higher.
npm: Comes with Node.js.
Vercel CLI: Required for Vercel deployment.
A Vercel account (free tier is sufficient).

Getting Started
1. Clone the Repository
If you have a Git repository, clone it:
git clone <your-repository-url>
cd simple-node-app

Alternatively, create a new directory and set up the project files manually.
2. Install Dependencies
Run the following command to install the required dependencies (Express):
npm install

This will install express as specified in package.json.
3. Run Locally
To run the application locally:

Start the server:

node api/index.js


The server will run on http://localhost:3000.

Access the API endpoints using a browser or a tool like Postman or curl:

http://localhost:3000/1 → {"id":1,"name":"Alice Johnson","age":25}
http://localhost:3000/2 → {"id":2,"name":"Bob Smith","age":30}
http://localhost:3000/3 → {"id":3,"name":"Charlie Brown","age":35}



4. Deploy to Vercel
To deploy the application to Vercel:

Install Vercel CLI (if not already installed):

npm install -g vercel


Log in to Vercel:

vercel login

Follow the prompts to authenticate with your Vercel account.

Deploy the Application:

From the project root directory, run:
vercel


Confirm the project directory (usually ./).
Accept default settings for build and output directories.
Choose your Vercel scope (your account or team).


Vercel will build and deploy the application, providing a unique URL (e.g., https://your-project-name.vercel.app).

Access the deployed API endpoints:

https://your-project-name.vercel.app/1
https://your-project-name.vercel.app/2
https://your-project-name.vercel.app/3



To deploy to production, use:
vercel --prod

5. Troubleshooting

Local Issues:

Ensure Node.js and npm are installed (node -v and npm -v).
Verify that express is installed (npm list express).
Check that the server is running on port 3000. If the port is in use, you can modify the port in api/index.js by adding const port = 3001; and updating app.listen(port).


Vercel Deployment Issues:

Ensure vercel.json is present and correctly configured.
Verify that index.js is in the api folder.
Check deployment logs in the Vercel dashboard or use vercel logs <your-deployment-url> for errors.
If endpoints return 404, confirm the rewrites in vercel.json are set to route all requests to /api.



6. API Endpoints
The application provides the following endpoints:

GET /1: Returns {"id":1,"name":"Alice Johnson","age":25}
GET /2: Returns {"id":2,"name":"Bob Smith","age":30}
GET /3: Returns {"id":3,"name":"Charlie Brown","age":35}

7. Notes

The application is configured for Vercel's serverless environment, so app.listen is not used in api/index.js. Instead, the Express app is exported with module.exports = app.
For local development, you can temporarily add app.listen(3000) to api/index.js if you prefer running it without Vercel CLI.
To add CORS support (e.g., for frontend access), install cors (npm install cors) and add to api/index.js:const cors = require('cors');
app.use(cors());



8. License
This project is unlicensed. Use it as needed for your purposes.

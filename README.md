# Node.js Architecture with MongoDB on Azure Cosmos

## Overview
This project showcases a Node.js backend architecture using TypeScript with MongoDB hosted on Azure Cosmos. It includes basic CRUD operations.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- Azure Cosmos (MongoDB API)

## Project Structure
The project follows a Model-View-Controller (MVC) architecture:
- **Models**: Defined using Mongoose schemas (`userModel.ts`).
- **Controllers**: Handle request/response logic (`userController.ts`).
- **Routes**: Define application routes (`userRoutes.ts`).
- **Middleware**: Includes validation middleware using `express-validator`.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   DB_URI=mongodb+srv://<username>:<password>@<your-cosmosdb-account>.mongo.cosmos.azure.com/<database-name>?ssl=true&replicaSet=globaldb
   PORT=3000
   ```
   Replace `<username>`, `<password>`, `<your-cosmosdb-account>`, and `<database-name>` with your actual MongoDB credentials and database information.

3. **Run the application:**
   ```bash
   npm start
   ```
   This will start the server at `http://localhost:3000`.


## Development
For development purposes, you can run the TypeScript compiler in watch mode and nodemon to automatically restart the server:
```bash
npm run watch
```

## Deployment
For deployment, ensure you have environment-specific configurations set up and use appropriate deployment tools or services (e.g., Azure App Service, AWS Elastic Beanstalk, Docker).


## License
This project is licensed under the [MIT License](LICENSE).

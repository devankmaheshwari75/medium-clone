# Blogging Application  

A web application inspired by Medium that allows users to create, publish, and read blog posts. The application features a modern frontend built with React and Tailwind CSS, combined with a robust backend utilizing Cloudflare Workers, Zod for validation, Prisma ORM for database management, and PostgreSQL for storage.  

## Features  

- User authentication with JWT for secure login and registration.  
- Create, edit, delete, and publish blog posts.  
- Read and comment on posts from other users.  


## Tech Stack  

- **Frontend**: React.js, TypeScript, Tailwind CSS  
- **Backend**: Cloudflare Workers  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Validation**: Zod  
- **Authentication**: JWT  

## Installation  

### Prerequisites  

Before you begin, ensure you have the following installed:  

- Node.js  
- PostgreSQL  
- Cloudflare Workers CLI (wrangler)  

### Clone the Repository  

```bash  
git clone https://github.com/yourusername/your-repo-name.git  
cd your-repo-name  
Frontend Setup
cd frontend  
npm install  
npm run start  
Backend Setup
Create a PostgreSQL database and update the .env file in the backend directory with your database credentials.

Apply the Prisma migrations:

cd backend  
npx prisma migrate dev  
Start the Cloudflare worker:
wrangler dev  
Usage
Open the frontend application in your browser: http://localhost:3000
Use the authentication routes to register or log in.
Once authenticated, you can start creating and reading blog posts.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or features you'd like to add.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React
Tailwind CSS
Cloudflare Workers
Zod
Prisma
PostgreSQL
Feel free to customize this section based on your project's unique characteristics and add any additional sections or information.



# Resume Builder App with Next.js and Appwrite

This project is a resume builder application built with Next.js, utilizing Appwrite for backend and data management. It provides a user-friendly interface for creating professional resumes, complete with features like profile summaries, work history, and job responsibilities.

## Features

- **Serverless Backend**: Utilizes Appwrite, an open-source backend server, to manage resume data.
- **Database Management**: Appwrite offers features such as authentication, database, storage, and functions, which can be used individually or combined to build powerful serverless applications.
- **Next.js Frontend**: Employs Next.js for fast, dynamic frontend development, ensuring a smooth user experience.
- **Resume Generation**: Automatically generates resumes based on user input, including profile summaries, work history, and job responsibilities.
- **PDF Export**: Allows users to export their resumes as PDF files for easy sharing and printing.
- **Email Delivery**: Optionally sends the generated resume to the user's email address.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/ssarkar551/resume-builder.git
   cd resume-builder
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Setup Appwrite**:
   - Install Docker Desktop for your operating system.
   - Download the Appwrite base `docker-compose.yml` and `.env` files and move them inside a directory named `appwrite` within your Next.js project.
   - Update the environment variables in the `.env` file and start Appwrite by running:
     ```
     docker compose up -d --remove-orphans
     ```
   - Access the Appwrite console at `http://localhost` or `http://localhost:80` to create a new account and project.

4. **Integrate Appwrite with Next.js**:
   - Install the Appwrite SDK:
     ```
     npm install appwrite
     ```
   - Create a `.env.local` file in your project directory and add your Appwrite API endpoint and project ID:
     ```
     NEXT_PUBLIC_APPWRITE_ENDPOINT=https://<your_appwrite_endpoint>
     NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
     ```
   - Initialize the Appwrite SDK in your Next.js project:
     ```javascript
     // pages/index.js
     import { Client } from 'appwrite';

     export function getServerSideProps() {
       const client = new Client();
       client
         .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
         .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
     }
     ```

5. **Run the Application**:
   ```
   npm run dev
   ```
   This command starts the development server. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Deployment

For deploying your Next.js app, the recommended platform is Vercel, which offers seamless integration and deployment for Next.js projects. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a basic overview of the Resume Builder App. For more detailed information, including technical specifications and advanced usage, please refer to the project documentation.

Citations:
[1] https://blog.logrocket.com/build-job-hosting-site-using-appwrite-next-js/
[2] https://appwrite.io/docs/quick-starts/nextjs
[3] https://dev.to/hackmamba/how-to-implement-real-time-data-sync-in-your-nextjs-app-with-appwrite-cloud-36pm
[4] https://dev.to/hackmamba/build-a-nextjs-app-with-appwrite-and-multiple-databases-5bgf
[5] https://github.com/Axolodev/next-appwrite-users
[6] https://github.com/appwrite/awesome-appwrite
[7] https://dev.to/hackmamba/how-to-create-a-note-taking-app-with-appwrite-and-graphql-in-nextjs-13-gp3
[8] https://github.com/appwrite/demo-todo-with-nextjs
[9] https://eightify.app/summary/web-development/create-next-js-apps-with-appwrite-s-open-source-backend-server
[10] https://appwrite.io/
[11] https://gatwirival.hashnode.dev/build-a-self-care-application-using-nextjs-and-appwrite
[12] https://livecycle.io/blogs/nextjs-appwrite/
[13] https://dev.to/qwel/getting-started-with-appwrite-in-nestjs-22gk
[14] https://eightify.app/summary/web-development/learn-next-js-appwrite-full-stack-course-for-beginners
[15] https://github.com/colinhemphill/nextjs-resume
# Project Documentation

This project is a web application built with Next.js, Tailwind CSS, and Firebase Admin SDK. It is designed to display a list of users and employees, fetching data from a Firestore database.

## Prerequisites

Before running this project, make sure you have the following installed on your machine:

- **Node.js**: Version 14 or later.
  - You can download it from [here](https://nodejs.org/).
- **npm** (Node Package Manager) or **Yarn**: For managing dependencies.
  - `npm` is installed automatically with Node.js. Alternatively, you can install Yarn from [here](https://yarnpkg.com/).

Additionally, you'll need a Firebase project with Firestore enabled:

- **Firebase Account**: Create an account and set up a project at [Firebase Console](https://console.firebase.google.com/).
- **Firebase Admin SDK Key**: Obtain your service account credentials JSON file from the Firebase Console.

## Technologies Used

- **Next.js**: A React framework for building SSR (Server-Side Rendering) and SSG (Static Site Generation) web applications.
- **Tailwind CSS**: A utility-first CSS framework used to style the application.
- **Firebase Admin SDK**: Firebase SDK for interacting with Firestore and other Firebase services from the server side.
- **Firestore**: A NoSQL cloud database for storing and syncing data in real-time.

## How to Run the Project

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
npm run dev
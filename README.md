Elect-Echo is a secure and user-friendly voting system designed to ensure fair and transparent voting processes. The system leverages modern web technologies to provide a seamless experience for both users and administrators.

## Features

- **One-Time Voting**: Each user is allowed to vote only once to maintain the integrity of the voting process.
- **Secure Authentication**: Utilizes JWT (JSON Web Tokens) for secure authentication.
- **Encrypted Passwords**: User passwords are securely stored using Bcrypt.
- **Real-Time Updates**: Votes are updated in real-time using React.js.
- **Secure**: Only admins can see all of votes.

## Technologies Used

- **Frontend**: React.js , Tailwind
- **Backend**: Node.js , Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: Bcrypt

## Getting Started

### Prerequisites

- Node.js
- React.js
- MongoDB Atlas account
- dotenv
- Express.js
- Mongoose

## Usage

  ### Users
- **Register**: Users can register by providing a valid Aadhar-Number and password.
- **Login**: Registered users can log in using their credentials.
- **Vote**: Once logged in, users can cast their vote. The system ensures that each user can vote only once.

### Admins
- **Dashboard**: Admins have access to a dashboard where they can monitor the voting process.
- **Manage Users**: Admins can manage user accounts, including resetting passwords and deleting accounts.
- **View Results**: Admins can view real-time voting results and generate reports.

### Security
- **JWT Authentication**: Ensures that only authenticated users can access the voting system.
- **Bcrypt Password Hashing**: Passwords are hashed using Bcrypt before being stored in the database, ensuring that even if the database is compromised, the passwords remain secure.
- **One-Time Voting**: The system enforces a one-time voting rule, preventing multiple votes from the same user.



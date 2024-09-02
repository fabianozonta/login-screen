# Login and Registration System

This project is a simple web application that includes user authentication features such as login and registration. The application is built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

## Features

- **Login and Registration Forms:** Users can create an account and log in using their email and password.
- **Password Encryption:** User passwords are securely stored using bcrypt hashing.
- **JWT Authentication:** Users are authenticated via JSON Web Tokens (JWT).
- **Responsive Design:** The application is styled to be responsive and user-friendly.

. ├── public │ ├── index.html # Main HTML file for login and registration │ ├── success.html # HTML file displayed upon successful login │ ├── index.css # Stylesheet for the application │ └── index.js # Front-end JavaScript for form handling ├── app.js # Main server file └── README.md 

# Project documentation

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/login-registration-system.git

cd login-registration-system
npm install
mongod
node app.js
The application will run on http://localhost:3000.

#Usage

Registration:

Access the registration form by clicking on the "Sign Up" link.
Fill in the required fields (name, email, and password) and submit the form.
Upon successful registration, you will be redirected to the login page.
Login:

Enter your registered email and password to log in.
Upon successful login, you will be redirected to a success page.
Success Page:

After logging in, the user will see a success message confirming their login.
Dependencies
Express
Mongoose
Bcrypt
JSON Web Token (JWT)

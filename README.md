# MediCare

MediCare is a MERN (MongoDB, Express.js, React, Node.js) project that facilitates the interaction between patients and doctors for appointment booking and management.


##  Features

1.User Authentication:
-Secure user authentication system for patient and doctors.

2.Appointment Booking:
-Patients can search for doctors, view their availability, and book appointments.
-Ability to book appointments with registered doctors on the platform.

3.Medical Services:
-Patients can browse services, check availability, and book appointments accordingly.

4.Profile Management:
-Users can manage their profiles, update personal information, and view appointment history.
-Doctors providers can manage their profiles and update their schedules.

5.Dashboard for Healthcare Providers:
-Dedicated dashboard for doctors to view patient details.

6.Review Feature:
- Provide an option for patients to leave feedback along with their ratings.
- Doctors can view the reviews and ratings left by patients on their profiles.
- Aggregate and display average ratings and reviews for each doctor to help patients make informed decisions.

## Getting Started:
1.Clone the repository:
```terminal
$ git clone https://github.com/SANYA12SHARMA/MEDICARE.git
```

2.Install dependencies:
```terminal
$ npm install
```

3.Navigate to frontend:
```terminal
$ cd frontend
$ npm run start
```

4.Navigate to backend:
```terminal
$ cd backend
$ npm run start-dev
```

5.Set up environment variables:
~Create a .env file in the root directory.
~Define the following variables:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

6.Access the application:
Open your web browser and navigate to https://medicarefrontend.onrender.com/home

## Usage: 
- Open the application in your web browser.
- Sign up or log in as a patient or doctor.
- Patients can book, view, and delete appointments. Doctors can manage appointments by accepting or rejecting them.
- Explore the application's features, including appointment booking, management, and reviews.

## Technologies Used
### Frontend:
- HTML, CSS, JavaScript
- React.js for dynamic user interface
### Backend:
- Node.js with Express.js framework
- MongoDB for database management
### Authentication:
- JWT(Json Web Token)

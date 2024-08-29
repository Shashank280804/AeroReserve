
# Overview
The Flight Management System is a comprehensive web application designed to streamline the management of flights, airports, and cities. This project showcases modern web development practices using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on secure user authentication, real-time updates, and data visualization.

# Project Architecture
- **Routes:** Defined RESTful endpoints for managing flights, airports, and cities.
- **Controllers:** Handle the logic for processing requests and - interacting with the database.
- **Models:** Define data schemas for flights, airports, and cities using Mongoose.
- **Middleware:** Authentication and authorization logic using JWT.
- **Services:** Reusable business logic, such as flight search algorithms and notification services.



## API Reference

#### Get All Flights

```http
  GET /api/v1/flights
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `none`    | `none`   | **Required**. Retrieves all flights |

#### Manage Airports

```http
  POST /api/v1/flights
```

| Parameter         | Type     | Description                       |
| :---------------- | :------- | :-------------------------------- |
| `flightData`      | `object` | **Required**. Data for the flight |

#### Get All Cities

```http
  GET /api/v1/cities
```

| Parameter         | Type     | Description                        |
| :---------------- | :------- | :--------------------------------- |
| `none`            | `none`   | **Required**. Retrieves all cities |


#### Create a City

```http
  POST /api/v1/cities
```

| Parameter         | Type     | Description                        |
| :---------------- | :------- | :--------------------------------- |
| `cityData`        | `object` | **Required**. Data for the city    |


## Features

- **Flight Management:** Create, retrieve, update, and delete flight records.
- **Airport Management:** Manage airport details, including name, address, and associated cities.
- **City Management:** Manage city records to associate with airports and flights.
- **User Authentication & Authorization:** Secure user login using bcryptjs for password hashing and JWT for token-based authentication.
- **Real-time Updates:** Instant notifications and updates for flight status using Socket.io.
- **Data Visualization:** Integrated graphs and charts for visual representation of flight data.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side logic.          
- **Express.js:** Web framework for building RESTful APIs.  
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Mongoose:** ORM for MongoDB.  
- **Socket.io:** Real-time bidirectional communication between client and server.  
- **bcryptjs:** Library for hashing passwords and enhancing security.
- **JWT:** Secure authentication and authorization.


## Installation

- Clone the repository:     
  `git clone https://github.com/your-usernameflight-management-system.git`

- Install dependencies:       
  `npm install`

- Run the application:     
  `npm start`

- Access the application: Open your browser and navigate to
   `http://localhost:5000.`

# Project Setup

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

...  
{  
"development": {
"username": <YOUR_DB_LOGIN>,  
"password": <YOUR_DB_PASSWORD>,  
"database": "Flights_Search_DB_DEV",  
"host": "127.0.0.1",  
"dialect": "mysql"  
},

}

...

- Once you've added your db config as listed above,go to the src folder from your terminal and execute:   
  `npx sequelize db:create`

- To create a new model:   
   `npx sequelize model:generate --name Airport --attributes name:String,cityId:integer`

- After new model created:  
  `npx sequelize db:migrate`

- Adding airport seed:  
  `npx sequelize seed:generate --name add-airports`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Set up environment variables:  
`PORT=5000`   
`JWT_SECRET=your_jwt_secret`

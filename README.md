# Student API

A simple REST API for managing student records using **Node.js, Express.js, and MongoDB**.

The API supports basic CRUD operations:

* Create a student
* Get all students
* Get a student by ID
* Update a student
* Delete a student

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Postman

## API Endpoints

**Base URL:**

`http://localhost:3000/api/students`

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/students`     | Get all students     |
| GET    | `/api/students/:id` | Get a student by ID  |
| POST   | `/api/students`     | Create a new student |
| PUT    | `/api/students/:id` | Update a student     |
| DELETE | `/api/students/:id` | Delete a student     |

## Student Schema

Each student contains the following fields:

```json
{
  "name": "string",
  "email": "string",
  "course": "string",
  "age": "number"
}
```

## Project Structure

```text
Student-api/
├── index.js       # Entry point, schema, model and API routes
├── db.js          # MongoDB connection
├── .env           # Environment variables
├── package.json   # Project information and dependencies
└── README.md      # Project documentation
```

## Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Go to the project folder

```bash
cd Student-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root folder:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```

If you are using MongoDB Atlas, replace `MONGO_URI` with your MongoDB Atlas connection string.

### 5. Start the server

```bash
npm start
```

Or:

```bash
node index.js
```

The server will run at:

`http://localhost:3000`

## API Examples

### Create Student

**POST**

`/api/students`

Request body:

```json
{
  "name": "Nirmal",
  "email": "nirmal@gmail.com",
  "course": "MCA",
  "age": 24
}
```

### Get All Students

**GET**

`/api/students`

### Get Student by ID

**GET**

`/api/students/:id`

Example:

`/api/students/68abc123...`

### Update Student

**PUT**

`/api/students/:id`

Request body:

```json
{
  "course": "MCA",
  "age": 25
}
```

### Delete Student

**DELETE**

`/api/students/:id`

## Testing

You can test all API endpoints using **Postman** or any other API testing tool.

## Requirements

Before running the project, make sure you have:

* Node.js installed
* MongoDB installed and running, or a MongoDB Atlas database
* Postman (optional, for API testing)

## CRUD Operations

| Operation | HTTP Method | Purpose               |
| --------- | ----------- | --------------------- |
| Create    | POST        | Add a new student     |
| Read      | GET         | Retrieve student data |
| Update    | PUT         | Update student data   |
| Delete    | DELETE      | Remove a student      |

## Author

Nirmal Jaganiya

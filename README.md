# Student API

## Summary
This project is a simple REST API for managing a list of students. The API supports Create, Read, Update, and Delete (CRUD) operations. All data is stored in a MongoDB.

## API Endpoints

### Base URL
`http://localhost:3000/api/students`

### Endpoints
| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/api/students`    | Retrieve all students          |
| GET    | `/api/students/:id`| Retrieve a student by ID       |
| POST   | `/api/students`    | Add a new student              |
| PUT    | `/api/students/:id`| Update an existing student     |
| DELETE | `/api/students/:id`| Delete a student by ID         |

## Schema
Each student will have the following structure:
```json
{
    "name": "string",
    "email": "string",
    "course": "string",
    "age": "number",
}
```

## Project Structure
```
Student-api/
├── index.js          # Entry point of the application,  Contains data structure or schema, API Endpoints
├── db.js             # Contain the database connection
├── .env              # contain enviornment variable
├── package.json      # contain the project informations 
├── README.md         # Project documentation
```

## Important Notes
- Ensure Node.js is installed to run the project.
- Use `npm install` to install dependencies (if any).
- Start the server using `node index.js` or `npm start`.
- Test the API using tools like Postman.
- MongoDB database is required; all data is stored in MongoDB.

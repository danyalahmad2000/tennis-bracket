// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 8000;

const { Pool } = pkg;
// PostgreSQL connection configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool
    .connect()
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle signup
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExistsQuery = 'SELECT * FROM users WHERE email = $1';
        const userExistsResult = await pool.query(userExistsQuery, [email]);

        if (userExistsResult.rows.length > 0) {
            // User already exists, send error response
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Insert new user into the database
        const createUserQuery = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)';
        await pool.query(createUserQuery, [firstName, lastName, email, password]);

        // User created successfully, send success response
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

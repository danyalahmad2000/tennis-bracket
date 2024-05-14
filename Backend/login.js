import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port =  7000;

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

// Endpoint to handle login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Query to check if the user exists in the database
        const userQuery = 'SELECT * FROM users WHERE email = $1 AND password = $2';
        const userResult = await pool.query(userQuery, [email, password]);

        // Check if the user exists
        if (userResult.rows.length > 0) {
            // User exists, send success response
            res.status(200).json({ message: 'Login successful' });
        } else {
            // User does not exist or invalid credentials, send error response
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 7000;

const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tennisBracketAdmin',
    password: '12345678',
    port: 5432,
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

// Assuming you have a User model imported from your data access layer
import User from './models/User'; // Adjust the import path based on your project structure

// Endpoint to generate JWT token upon login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists in the database
        const user = await User.findOne({ email });

        if (!user) {
            // If user is not found, return error
            console.log("User not registered:", email);
            return res.status(400).json({ error: 'User not registered' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // If password does not match, return error
            console.log("Incorrect password for user:", email);
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // User is authenticated, generate JWT token
        const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET);
        
        console.log("User logged in successfully:", email);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



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


//community.jsx
app.get('/community', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//players.jsx
app.get('/players', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM players');
        res.json(rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Play.jsx
app.get('/groupPlayers', async (req, res) => {
    try {
        // Query to fetch group players data
        const groupPlayersQuery = `
            SELECT gp.*, p.name, p.photo
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 order by gp.group_id, gp.player_id asc;
        `;
        const { rows } = await pool.query(groupPlayersQuery);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching group players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/quarterFinal', async (req, res) => {
    try {
        // Query to fetch group players data
        const groupPlayersQuery = `
            SELECT gp.*, p.name, p.photo
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 and gp.group_stage=1
            order by gp.group_id, gp.player_id asc;
        `;
        const { rows } = await pool.query(groupPlayersQuery);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching quarter finalists:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/semiFinal', async (req, res) => {
    try {
        // Query to fetch group players data
        const groupPlayersQuery = `
            SELECT gp.*, p.name
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 and gp.quarter_final=1
            order by gp.group_id, gp.player_id asc;
        `;
        const { rows } = await pool.query(groupPlayersQuery);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching semi finalists:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/final', async (req, res) => {
    try {
        // Query to fetch group players data
        const groupPlayersQuery = `
            SELECT gp.*, p.name
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 and gp.semi_final=1
            order by gp.group_id, gp.player_id asc;
        `;
        const { rows } = await pool.query(groupPlayersQuery);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching finalists:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/winner', async (req, res) => {
    try {
        // Query to fetch group players data
        const groupPlayersQuery = `
            SELECT gp.*, p.name
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 and gp.final=1
            order by gp.group_id, gp.player_id asc;
        `;
        const { rows } = await pool.query(groupPlayersQuery);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching winner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/fetchTournamentName', async (req, res) => {
    try {
        // Query to fetch tournament name
        const tournamentNameQuery = `
            SELECT name
            FROM tournaments
            WHERE isactive = 1;
        `;
        const { rows } = await pool.query(tournamentNameQuery);
        // Extract the tournament name from the first row of the result
        const tournamentName = rows.length > 0 ? rows[0].name : '';
        res.json({ tournamentName });
    } catch (error) {
        console.error('Error fetching tournament name:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

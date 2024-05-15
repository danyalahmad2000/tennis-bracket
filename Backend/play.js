import express from 'express';
import pkg from "pg";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());

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

const PORT = process.env.PORT || 15000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

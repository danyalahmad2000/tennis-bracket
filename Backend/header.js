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


const PORT = process.env.PORT || 20000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import React, { useState, useEffect } from "react";

const PredictWinner = () => {
  // State variables to store user selections and fetched data
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedTournament, setSelectedTournament] = useState("");
  const [tournaments, setTournaments] = useState([]);
  const [players, setPlayers] = useState([]);

  // Fetch tournaments and players data from backend when component mounts
  useEffect(() => {
    fetchTournaments();
    fetchPlayers();
  }, []);

  // Function to fetch tournaments data from backend API
  const fetchTournaments = async () => {
    try {
      const response = await fetch("/api/tournaments");
      const data = await response.json();
      setTournaments(data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  // Function to fetch players data from backend API
  const fetchPlayers = async () => {
    try {
      const response = await fetch("/api/players");
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  // Function to handle user selection of player
  const handlePlayerSelect = (event) => {
    setSelectedPlayer(event.target.value);
  };

  // Function to handle user selection of tournament
  const handleTournamentSelect = (event) => {
    setSelectedTournament(event.target.value);
  };

  // Function to submit user selections
  const handleSubmit = () => {
    // Send user selections to backend API to store in database
    // You'll need to implement this submit logic using fetch or axios
    // Example: submitUserSelection(selectedPlayer, selectedTournament)
  };

  return (
    <div>
      <h1 className="bg-">Predict the Winner</h1>
      <div>
        <label>Select Tournament:</label>
        <select value={selectedTournament} onChange={handleTournamentSelect}>
          <option value="">Select a tournament</option>
          {tournaments.map((tournament) => (
            <option key={tournament.id} value={tournament.id}>
              {tournament.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Player:</label>
        <select value={selectedPlayer} onChange={handlePlayerSelect}>
          <option value="">Select a player</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PredictWinner;

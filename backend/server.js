const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Server data
const serverInfo = {
    players: "64/64",
    ping: "47ms",
    tickrate: "60 Hz",
    settings: {
        region: "Europe - DE",
        punkBuster: "ON",
        fairFight: "ON",
        password: "OFF",
        preset: "NORMAL",
    },
    advanced: {
        minimap: "ON",
        onlySquadLeaderSpawn: "OFF",
        vehicles: "ON",
        teamBalance: "ON",
        minimapSpotting: "ON",
        hud: "ON",
        thirdPersonVehicleCam: "ON",
        regenerativeHealth: "ON",
        killCam: "ON",
        friendlyFire: "OFF",
        threeDSpotting: "ON",
        enemyNameTags: "ON",
    },
    rules: {
        tickets: 400,
        vehicleSpawnDelay: 25,
        bulletDamage: 100,
        kickAfterTeamKills: 5,
        playerHealth: 100,
        playerRespawnTime: 100,
        kickAfterIdle: 300,
        banAfterKicks: 3,
    },
    
};

// API endpoint for server info
app.get("/api/server-info", (req, res) => {
    try {
        // Ensure the response format is valid
        res.status(200).json({
            success: true,
            data: serverInfo,
        });
    } catch (error) {
        console.error("Error fetching server info:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching server info.",
        });
    }
});

// Fallback route for unmatched endpoints
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found.",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



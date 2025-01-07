// App.js - Main Application Component
import React from "react";
import Header from "./components/Header";
import ServerInfo from "./components/ServerInfo";
import "./App.css"; // Optional: Add global styles for the app

const App = () => {
    return (
        <div className="App">
            {/* Header component for the main navigation */}
            <Header />
            
            {/* Main content area */}
            <main>
                {/* Server Info section */}
                <section id="server-info" className="server-info-section">
                    <ServerInfo />
                </section>

                 {/* Map Rotation section
                <section id="map-rotation" className="map-rotation-section">
                    <h2>Map Rotation</h2>
                    <MapRotation />
                </section> */}
            </main>
        </div>
    );
};

export default App;

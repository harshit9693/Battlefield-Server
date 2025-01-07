import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServerInfo.css";

const ServerInfo = () => {
    const [serverData, setServerData] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchServerInfo = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/server-info");
                if (response.data.success) {
                    setServerData(response.data.data);
                } else {
                    console.error("Failed to fetch server info:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching server info:", error);
            }
        };
        fetchServerInfo();
    }, []);

    if (!serverData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="server-info-container">
            {/* <header className="header">
                <h1>Game Server Info</h1>
            </header> */}
            {/* Basic Info */}
            <div className="basic-info">
                    {/* <h3>Basic Information</h3> */}
                    <p><strong>Players:</strong> {serverData.players}</p>
                    <p><strong>Ping:</strong> {serverData.ping}</p>
                    <p><strong>Tickrate:</strong> {serverData.tickrate}</p>
                </div>
            <div className="info-section">

                <div className="info-section-settings">
                    {/* Server Settings */}
                {serverData.settings && (
                    <div className="settings">
                        <h3>Settings</h3>
                        <ul>
                            {Object.entries(serverData.settings).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </div>

                <div className="info-section-advanced">

                {/* Advanced Settings */}
                {serverData.advanced && (
                    <div className="advanced-info">
                        <h3>Advanced Settings</h3>
                        <ul>
                            {Object.entries(serverData.advanced).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </div>

                <div className="info-section-rules">
                {/* Server Rules */}
                {serverData.rules && (
                    <div
                        className={`rules ${isHovered ? "hovered" : ""}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h3>Rules</h3>
                        <ul>
                            {Object.entries(serverData.rules).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default ServerInfo;
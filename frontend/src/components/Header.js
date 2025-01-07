import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="breadcrumb">
        &lt; &nbsp; &nbsp; MULTIPLAYER / SERVER BROWSER / 
      </div>
      <h1 className="main-title">SERVER INFO</h1>
      <h2 className="server-title">#1| NASA | Noobs Welcome | Conquest 40Hz</h2>
      <div className="server-details">
        <img
          src="https://storage.googleapis.com/a1aa/image/ePEEApXLciTUZqqOiZHwKfgxAUNtNXPS04dIbC6U5SSXxZBUA.jpg"
          alt="USA flag"
          className="server-flag"
        />
        <span>CONQUEST LARGE</span>
        <span className="separator">-</span>
        <span>LANGCANG DAM</span>
        <span className="separator">-</span>
        <span>CUSTOM</span>
        <span className="separator">-</span>
        <span>60 HZ</span>
      </div>
      <p className="server-description">
        Server protected by The K-50 AntiCheat. Vip Rules, Questions, Request,
        Appeal, Visit us:{" "}
        <a href="https://www.epg.gg" className="link">
          www.epg.gg
        </a>{" "}
        | Discord{" "}
        <br></br>
        <a href="https://discord.gg/3r5NK4d" className="link">
          https://discord.gg/3r5NK4d
        </a>
      </p>
      <div className="button-container">
        <button className="action-button">JOIN</button>
        <button className="action-button">SPECTATE</button>
        <button className="action-button">JOIN AS COMMANDER</button>
        <div className="rating-box">
          <i className="fas fa-star"></i> 13672
        </div>
      </div>
    </header>
  );
};

export default Header;

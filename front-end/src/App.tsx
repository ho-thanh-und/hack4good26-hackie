import React, { useState } from "react";
import { Send, User, MessageSquare, Edit2 } from "lucide-react";
import "./App.css";
import GrantResults from "./components/GrantResults";
const GrantMatchApp = () => {
  const [input, setInput] = useState("");

  return (
    <div className="app-container">
      <header className="content-wrapper brand-header">
        <h1 className="brand-name">GrantMatch</h1>
      </header>

      <main className="content-wrapper">
        {/* Chat Card */}
        <section className="card">
          <div className="chat-header">
            <div className="chat-icon-box">
              <MessageSquare size={24} color="#e11d48" />
            </div>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 700 }}>
              Grant Discovery Assistant
            </h2>
          </div>

          <div className="chat-body">
            <div className="bot-bubble">
              <p className="bot-name">GrantMatch</p>
              <p className="bot-text">
                Hello! I'm here to help you find grants that match your
                organisation. Tell me about your organisation:
              </p>
              <ul className="bot-list">
                <li>What issue areas do you focus on?</li>
                <li>What is your organisation's scope?</li>
                <li>What funding range are you looking for?</li>
              </ul>
            </div>

            <div className="user-bubble">
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Youth Development and Education
              </p>
            </div>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message here"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="send-button">
              <Send size={20} color="white" />
            </button>
          </div>
        </section>

        {/* Profile Card */}
        <section className="card" style={{ padding: "1.5rem" }}>
          <div className="profile-header">
            <div className="profile-title-box">
              <div className="user-icon-box">
                <User size={20} color="#3b82f6" />
              </div>
              <h2 style={{ fontSize: "1.125rem", fontWeight: 700 }}>
                Your organisation Profile
              </h2>
            </div>
            <button className="edit-button">
              <Edit2 size={12} /> Edit Profile
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-box red">
              <p className="stat-label">Issue Area</p>
              <p className="stat-value">Youth Development and Education</p>
            </div>
            <div className="stat-box green">
              <p className="stat-label">Funding Range</p>
              <p className="stat-value">10000</p>
            </div>
          </div>
        </section>
        <GrantResults />
      </main>
    </div>
  );
};

export default GrantMatchApp;

import React from "react";
import { Eye } from "lucide-react"; // Using Lucide for the puzzle icon
import "./MatchingGrant.css";

const GrantResults = () => {
  return (
    <div className="results-container">
      <div className="results-wrapper">
        {/* Header Section */}
        <header className="results-header">
          <div className="title-group">
            <h1 className="main-title">
              <span style={{ fontSize: "1.5rem" }}>🧩</span> Matching Grant
            </h1>
            <p className="match-count">
              We found <span>3</span> grants match you
            </p>
          </div>

          <select className="sort-select">
            <option>Sort By: Best Match</option>
            <option>Sort By: Deadline</option>
            <option>Sort By: Funding Amount</option>
          </select>
        </header>

        {/* Grant Results Grid/List */}
        <div className="results-grid">
          <article className="grant-card">
            <div className="card-header-row">
              {/* Note: Replace src with actual logo path */}
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Sport_Singapore_Logo.svg/1200px-Sport_Singapore_Logo.svg.png"
                alt="Sport Singapore"
                className="brand-logo"
              />
              <div className="match-badge">90% match</div>
            </div>

            <h2 className="grant-name">Active Citizen Grant</h2>

            <ul className="grant-details-list">
              <li>Youth & Sport</li>
              <li>Up to $20000</li>
              <li>
                Deadline 2026-01-30
                <span className="priority-badge">High Priority</span>
              </li>
            </ul>

            <hr className="divider" />

            <h3 className="objectives-label">Key Objectives:</h3>
            <div className="tag-container">
              <span className="objective-tag">
                Health & Wellness Initiative
              </span>
            </div>

            <button className="view-details-btn">
              <Eye size={18} /> View Details
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GrantResults;

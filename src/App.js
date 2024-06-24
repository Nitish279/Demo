import React from "react";
import "./App.css";
import {
  FaRegFileAlt,
  FaTasks,
  FaBoxes,
  FaDatabase,
  FaUsers,
  FaKey,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">ACADIA SOFT</div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">TEMPLATES</a>
          <a href="#">JOBS</a>
        </nav>
        <div className="profile">
          <span>nitish.anand@acadia.inc</span>
          <a href="#" className="logout">
            logout
          </a>
        </div>
      </header>
      <main>
        <div className="dropdowns">
          <select>
            <option>Default Repository</option>
            {/* Add other options here */}
          </select>
          <select>
            <option>Default Inventory</option>
            {/* Add other options here */}
          </select>
          <button>CLEAR DEFAULT SELECTIONS</button>
        </div>
        <div className="icons-grid">
          <div className="icon-card">
            <FaRegFileAlt className="icon" />
            <p>Templates</p>
            <div className="description">Manage & Launch</div>
          </div>
          <div className="icon-card">
            <FaTasks className="icon" />
            <p>Jobs</p>
            <div className="description">View jobs that have run</div>
          </div>
          <div className="icon-card">
            <FaBoxes className="icon" />
            <p>Inventories</p>
            <div className="description">Manage Inventories</div>
          </div>
          <div className="icon-card">
            <FaDatabase className="icon" />
            <p>Repos</p>
            <div className="description">Manage Repositories</div>
          </div>
          <div className="icon-card">
            <FaUsers className="icon" />
            <p>Users</p>
            <div className="description">Manage Users</div>
          </div>
          <div className="icon-card">
            <FaKey className="icon" />
            <p>Keys</p>
            <div className="description">Manage Keys</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Accueil
        
        <i className="material-symbols-outlined">apartment</i>
        </span>
        <form className="srch">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>
          <i className="material-symbols-outlined">search</i>
      </nav>
      <header>
        <h1>Bonjour !</h1>
        <h3>
          Nous vous souhaitons la bienvenue sur le site web dédié à votre
          résidence.
        </h3>
        <br />
        <h6>Pour vous connecter, cliquez sur un des lien pour vous diriger vers la page de connexion.</h6>
      </header>
      <div className="container">
        <div className="card-1">
          <Link to="/ResidentLogin" className="link-1">
            Résident
          </Link>
        </div>
        <div className="card-2">
          <Link to="/AdminLogin" className="link-2">
            Administrateur
          </Link>
        </div>
      </div>
      <footer>
        <p>
          Copyright <span>&copy;</span> 2024 All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import "./AdminPage.css";

import UserTable from "./Table/UserTable";
import { Toaster } from "react-hot-toast";
import TaskTable from "./Component/charges";



export default function AdminPage() {


  return (
    <div className="wdt">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Admin.
          <i className="material-symbols-outlined">
            manage_accounts
          </i>
          <a href="/" className="material-symbols-outlined">
              logout 
              
          </a>
        </span>
        <form className="grg">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>
      </nav>
      <div className='drd'>
        <h1>Bonjour !</h1>
        <h6>Voici votre profile.</h6>
      </div>
      <Toaster></Toaster>
      <UserTable />
      <TaskTable />
    </div>
  );
}

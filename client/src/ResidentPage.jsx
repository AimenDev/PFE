import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './ResidentPage.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import { Toaster } from "react-hot-toast";

export default function Resident() {
  
  const [value, setValue] = useState({
    nom: '',
    prénom: '',
    phone: '',
    message: '',
    type_de_demande: '' // Default value for radio button
  });

  const handlechange = (ev) => {
    setValue({
      ...value,
      [ev.target.name]: ev.target.value
    });
  };

  const handleSubmite = async (ev) => {
    ev.preventDefault();

    try {
      const addresident = await axios.post('http://localhost:8000/api/ajouter', value);
      const response = addresident.data;
      if (response.success) {
        toast.success("Demande envoyée");
        // Reset form after success
        setValue({
          nom: '',
          prénom: '',
          phone: '',
          message: '',
          type_de_demande: '' // Reset radio button choice
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{background:'linear-gradient(to left, #485563, #29323c)',minHeight: '100vh'}}>
      <nav className="navbar navbar bg-transperent">
        <div className="container-fluid">
          <span className="navbar-brand">Résident</span>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>
        </div>
      </nav>
      <div className='hd'>
        <h1>Bonjour !</h1>
        <h6>Voici votre profile.</h6>
      </div>
      <div className="dd">
        <p>Pour demander une nouvelle clé, remplissez les informations suivantes :</p>
      </div>
      <div className="cnt">
        <header>Mes informations </header>
        <form className="formula" onSubmit={handleSubmite}>
          <div className="modal-body">
            <div className="form-group">
              <label>Nom</label>
              <input type="text" value={value.nom} name='nom' onChange={handlechange} className="form-control" required />
            </div>
            <div className="form-group">
              <label>Prénom </label>
              <input type="text" value={value.prénom} name='prénom' onChange={handlechange} className="form-control" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" value={value.phone} name='phone' onChange={handlechange} className="form-control" required />
            </div>
          </div>
          <div className="form-group">
            <label className="lb" >
              <input id="option-one" value="Clé perdue" name="type_de_demande" onChange={handlechange} type="radio" checked={value.type_de_demande === 'Clé perdue'} required />
              Clé perdue
            </label>
            <label >
              <input id="option-two" value="lendommagement de clé" name="type_de_demande" onChange={handlechange} type="radio" checked={value.type_de_demande === 'lendommagement de clé'} required />
              Lendommagement de clé
            </label>
          </div>
          <div className="form-group">
            <label className="msg">Votre message</label>
            <textarea className="form-control" value={value.message} name="message" onChange={handlechange} />
          </div>
          <input type="submit" className="boutona" />
        </form>
      </div>
      <Toaster></Toaster>
      <div className='bnt'>
        <hr></hr>
          <h4>Résident, 27</h4>
          <h6>..., Algerie</h6>
          <h3>Total des cotisations</h3>
          <h5>70 000 DZD</h5>
      </div>
    </div>
  );
}

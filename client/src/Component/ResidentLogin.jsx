import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResidenLogin = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:8000/login', {username, password})
        // .then(result => {
        //     console.log(result);
        //     if(result.data === "Success"){
        //         console.log("Login Success");
        //         alert('Login successful!')
                navigate('/ResidentPage');
        //     }
        //     else{
        //         alert('Incorrect password! Please try again.');
        //     }
        // })
        // .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100">
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Username</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Entrez votre nom d'utilisateur"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Entrez votre mot de passe"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    </div>
            </div>
        </div>
    )
}

export default ResidenLogin
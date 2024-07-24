import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddUser() {
    const [value, setValue] = useState({
        nom: '',
        prénom: '',
        phone: '',
        clé: '',
        date: '',
        cotisation: ''
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:8000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()
                setValue({
                    nom: '',
                    prénom: '',
                    phone: '',
                    clé: '',
                    date: '',
                    cotisation: ''
                })
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Ajouter un résident</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" value={value.nom} name='nom' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Prénom </label>
                                    <input type="text" value={value.prénom} name='prénom' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Clé</label>
                                    <input type="text" value={value.clé} name='clé' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>date</label>
                                    <input type="date" value={value.date} name='date' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>cotisation</label>
                                    <input type="text" value={value.cotisation} name='cotisation' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Annuler" />
                                <input type="submit" className="btn btn-primary" value="Ajouter" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
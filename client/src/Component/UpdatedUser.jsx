import React from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {



    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update Informations</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" value={value.nom} name='nom' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Prénom</label>
                                    <input type="text" value={value.prénom} name='prénom' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>

                                    <input type="text" value={value.phone} name='phone' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Clé</label>
                                    <input type="text" value={value.clé} name='clé' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>date</label>
                                    <input type="date" value={value.date} name='date' onChange={handlechange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>cotisation</label>
                                    <input type="text" value={value.cotisation} name='cotisation' onChange={handlechange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
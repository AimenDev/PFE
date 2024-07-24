import express from 'express';
import { create,get,Updated,Delete } from '../controllers/usercontrollers.js';
import  { demande } from '../controllers/residentcontrolle.js';

const routers=express.Router()

routers.post('/create',create)
routers.get('/get',get)
routers.put('/update/:id',Updated)
routers.delete('/delete/:id',Delete)
routers.post('/ajouter',demande)



export default routers;
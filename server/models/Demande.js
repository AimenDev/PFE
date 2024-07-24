import mongoose from "mongoose";

const residentSchema = new mongoose.Schema(
  {
    type_de_demande:{
        type: String, // Define the possible values
        enum:['Clé perdue' , 'lendommagement de clé'],
        required: true,
      },
    nom: {
      type: String,
      required: true,
    },
    prénom: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    
      message: {
        type: String,
        required: false,
    }
  }
);

const residentmodel = mongoose.model("resident", residentSchema);

export default residentmodel;
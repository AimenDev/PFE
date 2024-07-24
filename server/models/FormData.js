import mongoose from "mongoose";


const FormDataSchema = new mongoose.Schema({
    username : String,
    password: String
})

const FormDataModel = mongoose.model('login_form', FormDataSchema);

export default FormDataModel;
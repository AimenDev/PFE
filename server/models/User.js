import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    clé: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    cotisation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const usermodel = mongoose.model("users", userSchema);

export default usermodel;

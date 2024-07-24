import  usermodel  from "../models/User.js";

const create = async (req, res) => {
  try {
    const { nom, prénom, phone, clé, date, cotisation } = req.body;
    const Newuser = new usermodel({
      nom,
      prénom,
      phone,
      clé,
      date,
      cotisation
    });
    await Newuser.save();

    res
      .status(200)
      .json({ success: true, message: "Les informations ont été enregistrées avec succès.", Newuser });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Interl server eror" });
  }
};

///////Read api
const get = async (req, res) => {
  try {
    const users = await usermodel.find();
    if (!users) {
      return res.status(404).json({ success: false });
    }

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false });
  }
};

////////update user api
const Updated = async (req, res) => {
  try {
    const userId = req.params.id;

    const updateuser = await usermodel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updateuser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "information updated successfully",
        updateuser,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delet user ap
const Delete = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletuser = await usermodel.findByIdAndDelete(userId);
    if (!deletuser) {
      return res
        .status(404)
        .json({ success: false, message: "user Not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "résident Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { create, get, Updated, Delete };

// import modules
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import routers from "./routes/routes.js";
import FormDataModel from "./models/FormData.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routers);

// LOGIN FORM

app.post('/login', (req)=>{
  const {username,password} = req.body;
  FormDataModel.find({username: username,
                      password: password})
})
// starting server
const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT,()=>{
        console.log('server is running on http://localhost:8000')
    })
  } catch (error) {
    console.log(error);
  }
};

startServer();

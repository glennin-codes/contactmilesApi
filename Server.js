import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
app.get("/test",(req,res)=>{
   res.send("hi");
})
// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { FirstName,LastName,email,number,message} = req.body
    EmailSender({FirstName,LastName,email,number,message})
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
require("./db/connection");

const User = require('./models/User');

app.post("/", async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
   console.log("iam in");
})

app.listen(3000);
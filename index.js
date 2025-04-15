const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/hello', async (req, res) => {
    console.log(req.body);

    return res.status(200).json({ message: "Hello world" })
})

app.get('/hello2', async (req, res) => {
    res.status(200).json({ message: "Hello world 2" })
})

app.listen(3000, () => console.log("Server running on port 3000"));

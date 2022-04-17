const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const shop = require("./routes/shop");
InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({message: "API works"});
});

app.use("/user", user);
app.use("/shop", shop);

app.listen(PORT, (req,res) => {
    console.log(`Server Started at PORT ${PORT}`);
});
require("dotenv").config();
const express = require("express");
const res = require('express/lib/response');
const Sequelize = require('sequelize');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(express.json());
// app.use(express.static('client/build'))
const axios = require('axios');

app.use(cors());
app.use("/hebergement", require("./routes/hebergementRoutes.js"));
app.use("/reservation", require("./routes/reservationRoutes.js"));
app.use((err,req,res,next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message:"Something went really wrong",
    });
});

app.listen( process.env.PORT || PORT, () => {
    console.log('Server started !');
});

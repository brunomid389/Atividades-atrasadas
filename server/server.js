const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const db = require("./db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.post("/chat", async (req, res) => {

    const { message } = req.body;

    try {

        const response = await axios.post(
            "URL_DA_API_GROK",
            {
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`
                }
            }
        );

        const aiResponse = response.data.response;

        db.query(
            "INSERT INTO messages(question, answer) VALUES (?, ?)",
            [message, aiResponse]
        );

        res.json({
            response: aiResponse
        });

    } catch(error){

        res.status(500).json({
            error: "Erro ao conectar"
        });

    }

});

app.listen(3000, () => {
    console.log("Servidor rodando");
});
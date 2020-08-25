const express = require('express');
const cors = require('cors')
const axios = require('axios');
const app = express();

app.use(cors());

app.get("/", async (req, res) => {

    try {
        let { data } = await axios("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
        
        let { cards } = data;

        return res.json(cards)

    } catch(error) {
        console.error(error);
    }

});

app.listen(4567)
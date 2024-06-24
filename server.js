const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());

app.post('/convert', async (req, res) => {
    try {
        const text = req.body.text;
        const response = await axios.post('https://fc3t70pzjk.execute-api.ca-central-1.amazonaws.com', { text: text });
        res.json({ audioUrl: `https://s3-bucket-name.s3.amazonaws.com/${response.data.key}` });
    } catch (error) {
        res.status(500).send('Error processing the request');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));



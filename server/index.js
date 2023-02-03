const express = require('express');
const cors = require('cors');
const axios = require('axios');

const logger = require('morgan');

const app = express();

app.use(cors());

const port = 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/uploadImage', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token 71646c0862102234af39cc3659b844629f4be351'
        };

        let params = JSON.stringify({
            version: "f410ed4c6a0c3bf8b76747860b3a3c9e4c8b5a827a16eac9dd5ad9642edce9a2",
            input: { "prompt": "1girl, brown hair, green eyes, colorful, autumn, cumulonimbus clouds, lighting, blue sky, falling leaves, garden"}
        });

        const response = await axios.post('https://api.replicate.com/v1/predictions', params, { headers });

        res.status(200).send(response.data);
    }
    catch(err) {
        console.error("Error fetching the images", err);
        res.status(500).send(err);
    }
});


app.post('/getImage', async (req, res) => {
    try {
        console.log(req.body);

        const headers = {
            'Content-Type': 'application/json', 
            'Authorization': 'Token 71646c0862102234af39cc3659b844629f4be351'
        };

        let response = await axios.get('https://api.replicate.com/v1/predictions/v2324pz775hd3mwtppfm6e2es4', {headers})
        console.log(response.data);

        res.status(200).send(true)
    }
    catch(err) {
        console.log("Error getting the image", err);
        res.status(500).send(err);
    }
})


app.listen(port, () => console.log(`App is droped on ${port}`));
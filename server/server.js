const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const { pathToFileURL } = require('url');

const port = process.env.PORT || 8080;
const app = express();
const router = express.Router();

app.use(cors());


fetch("https://mlh.io/seasons/2021/events").then(res => console.log(res));
app.use('/', router);

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'sucess'
    });
});

app.listen(port);
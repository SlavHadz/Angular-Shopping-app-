const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;
const api = require('./routes/api');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.listen(PORT, () => {
    console.log('Server running ot localhost:' + PORT);
})
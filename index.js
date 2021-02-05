const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`✅ Listening On: http://localhost:${PORT}`);
}

const home = (req, res) => {
    res.send(`Welcome to my Home!`);
}

app.get('/', home);

app.listen(PORT, handleListening);
const express = require("express");
const cors = require("cors");
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'client/build')));


const teamsRouter = require('./routes/teams');
const scoresRouter = require('./routes/scores');
const newsRouter = require('./routes/news');

app.use('/teams', teamsRouter);
app.use('/scores', scoresRouter);
app.use('/news', newsRouter);

app.get('*', (req, res) => {res.sendFile(path.join(__dirname+'/client/build/index.html'));});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}!`);
});

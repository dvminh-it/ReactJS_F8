const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./route');

const app = express();
const port = 3001;

mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost:27017/quiz_app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        //console.log("Connected database !!")
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors({}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`)
});

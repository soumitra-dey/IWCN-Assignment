const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const notesRouter = require('./routes/tasks.routes');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())
app.use('/', notesRouter)

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT, async () => {
        console.log(`listening on http://localhost:${process.env.PORT}`);
    })
})

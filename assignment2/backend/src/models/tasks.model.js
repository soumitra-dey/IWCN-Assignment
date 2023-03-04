const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    time: { type: String, required: true }
})

const notesModel = model('note', notesSchema)

module.exports = notesModel;
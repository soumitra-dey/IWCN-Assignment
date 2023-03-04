const notesModel = require('../models/tasks.model');

const getData = async (req, res) => {
    const data = await notesModel.find()
    return res.status(200).send(data)
}

const postData = async (req, res) => {
    const { title, body, time } = req.body
    try {

        const newNote = new notesModel({ title, body, time })
        await newNote.save()
        const data = await notesModel.find()
        return res.status(200).send(data)

    } catch (e) {
        return res.status(501).send(e.message)
    }
}

const deleteData = async (req, res) => {
    const { id } = req.params;

    try {

        await notesModel.findByIdAndDelete(id);
        const data = await notesModel.find()
        return res.status(200).send(data)

    } catch (e) {
        return res.status(501).send(e.message)
    }
}

module.exports = { getData, postData, deleteData }
const { Router } = require('express');
const { getData, postData, deleteData } = require('../controllers/tasks.controller');


const notesRouter = Router();


notesRouter.get('/', getData)

notesRouter.post('/', postData)

notesRouter.delete('/:id', deleteData)


module.exports = notesRouter;

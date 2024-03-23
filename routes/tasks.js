const express = require('express');
const router = express.Router();

const {getAllTasks,createTask,getTask,deleteTask,updateTask } = require('../controllers/task')

router.route('/').get(getAllTasks).post(createTask) // here the '/' - adds to the path declared for the middleware app.use in app.js(3000/api/v1/tasks)

router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);// where is the other url part?-defined in app.js already
//what is with the ':id' -- its the dynamic part of the url which would vary,
//so here after the ":" part will be added to the req.params.inthis case req.params.id
//will have the value which is provided in the URL after the '/' part(':' wont be there in the actual url)
//by puting the ":" we are telling the server that its a req.params parameter.
module.exports = router;
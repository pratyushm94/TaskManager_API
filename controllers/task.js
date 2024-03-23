//it is here in the controllers, where define all the functionalities for the routes.
// functionalities with data base or responses etc
const Task = require('../models/tasks')
const asyncWrapper = require('../middlewares/asyncWrapper')


const getAllTasks = asyncWrapper(async function (req, res) {
    const tasks = await Task.find({})  // empty curly(means no filter object) -get all docs 
    res.status(200).json({tasks})  
})
const createTask = asyncWrapper(async function (req, res) {
    const task = await Task.create(req.body) //mongoose.model returns a promise, so await can be used 
    res.status(201).json({ task }) // task will be an json/document creatd in mongo db
})
const getTask = asyncWrapper(async (req,res) => {
    //find the task with a id ffrom the database
    const { id: taskID } = req.params; //id will match with id defined in the route param
    const task = await Task.find({ _id: taskID }) //put it like object format
    if (!task) {
        return res.status(404).json({msg: `no task with task id ${taskID}`})
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID })
    res.status(200).json({ msg: `task with id ${taskID} deleted ` })
    if (!task) {
        return res.status(404).json({msg: `task not found ${taskID}`})
    }
    
})

const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json(task);
    if (!task) {
        return res.status(404).json({msg: `task not found ${taskID}`})
    }
    
})

module.exports = { getAllTasks, createTask, getTask, deleteTask, updateTask}

//Error: Route.get() requires a callback function but got a [object Undefined] -- meaning 
//the callback function in the route is not defined, check name characters etc.
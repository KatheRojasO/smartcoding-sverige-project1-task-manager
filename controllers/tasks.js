const Task = require ('../models/Tasks')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({ tasks })//This method sends a response (with the correct content-type) that is the parameter converted to a JSON string 
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

const createTask = async(req,res) => {
    //res.send('create task'); this sends the HTTP response. Basically it's a print of the information is between ()
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })//This method sends a response (with the correct content-type) that is the parameter converted to a JSON string 
    } catch (error) {
        res.status(501).json({ msg:error })
    }
}

const getTask = async (req,res) => {
    //res.send('get single task');
    //res.json({id:req.params.id}) //it shows the id in the route, hello in this case
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({ msg:`No task with the id : ${taskID}` })
        }
        res.status(200).json({ task })//This method sends a response (with the correct content-type) that is the parameter converted to a JSON string 
    } catch (error) {
        res.status(500).json({ msg:error })
    }  
}

const UpdateTask = async (req,res) => {
    res.send('update task');
    /*try {
        const {id:taskID} = req.params;
        
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{

        })
    }catch (error){
        res.status(500).json({ msg:error })
    }*/
}

const deleteTask = async (req,res) => {
    //res.send('delete task');
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({ msg: `No task with the id : ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error){
        res.status(500).json({ msg:error })
    }
        
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask,
} 
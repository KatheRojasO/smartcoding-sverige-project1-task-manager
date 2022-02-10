const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

const createTask = (req,res) => {
    //res.send('create task'); this sends the HTTP response. Basically it's a print of the information is between ()
    res.json(req.body); //This method sends a response (with the correct content-type) that is the parameter converted to a JSON string 
}

const getTask = (req,res) => {
    //res.send('get single task');
    res.json({id:req.params.id}) //it shows the id in the route, hello in this case
}

const UpdateTask = (req,res) => {
    res.send('update task');
}

const deleteTask = (req,res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask,
} 
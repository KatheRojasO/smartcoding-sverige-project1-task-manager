const express = require ('express');
const connectDB = require('./db/connect');
const app = express();
const tasks = require ('./routes/tasks');
require('dotenv').config();

app.use(express.json()); //middelware: This is going to comunicate with the api to bring the information


//All the routes of the app
app.get('/hello', (req, res) =>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);

const port = 3000

const start =async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start()




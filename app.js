const express = require ('express');
const app = express();
const tasks = require ('./routes/tasks');

app.use(express.json()); //middelware: This is going to comunicate with the api to bring the information


//All the routes of the app
app.get('/hello', (req, res) =>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);

const port = 3000

app.listen(port,console.log(`server is listening on port ${port}`));


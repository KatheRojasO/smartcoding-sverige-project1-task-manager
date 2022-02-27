const express = require ('express');
const connectDB = require('./db/connect');
const app = express();
const tasks = require ('./routes/tasks');
const notFound = require('./middleware/not-found')
const errorHandlerMiddlerware = require('./middleware/error-handler')
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json()); //middelware: This is going to comunicate with the api to bring the information


//All the routes of the app

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddlerware);

const port = process.env.PORT || 3000

const start =async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start()




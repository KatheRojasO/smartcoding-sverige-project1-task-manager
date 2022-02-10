const mongoose = require ('mongoose')

const connectionString = 'mongodb+srv://KatherynRojas:L0L@!<password>@nodejsprojects.cr4oh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=>console.log ('CONNECTED TO THE DB..')).catch((err) => console.log(err))
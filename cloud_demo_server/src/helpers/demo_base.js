const mongoose = require('mongoose')

const db = 'Ecommerce_pavithiran';
const connectionURL = `mongodb+srv://karthicktj:NbaU9DJ6E0mtBlBL@cluster0.gdjet.mongodb.net/${db}?retryWrites=true&w=majority`

let mongooseConn = mongoose.connect(connectionURL, 
    {
        useNewUrlParser: true
    }
    ).then(console.log(`Connected to ${db} db Successfully..`))
    .catch(error => console.log(error));

module.exports = mongooseConn;

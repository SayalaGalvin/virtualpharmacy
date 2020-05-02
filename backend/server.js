let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

const pharmacyRoute = require('../backend/routes/pharmacy.routes')

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/pharmacy",{
            useCreateIndex:true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
}).then(()=> {
    console.log('Database Successfully Connected')
},
error =>{
    console.log(error)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/pharmacy', pharmacyRoute)

//port
const port = process.env.PORT || 4000;
const server = app.listen(port,()=>{
    console.log('Connected to the port ' + port)
})

//not found
app.use((req,res,next) => {
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.error(err.message);
    if(err.statusCode)err.statusCode=500
    res.status(err,statusCode).send(err.message);
})
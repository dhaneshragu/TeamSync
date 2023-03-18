require('dotenv').config();
const cors=require('cors');
const mongoose = require('mongoose');
const express = require('express');

// import routes 
const projectRoutes = require('./routes/project')
const userRoutes = require('./routes/user')

const organisationRoutes=require('./routes/organisation')

const taskRoutes = require('./routes/task')
const boardRoutes = require('./routes/board')

//express app
const app = express();

app.use(cors());
//middleware
// app.use(express.json())
app.use((req,res,next)=>{
        // console.log(req.path,req.method)
        next()
})

//routes
app.use('/projects/',projectRoutes)
app.use('/user/',userRoutes)
app.use('/organisation/',organisationRoutes)
app.use('/tasks/',taskRoutes)
app.use('/boards/',boardRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db & listening to the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err);
})
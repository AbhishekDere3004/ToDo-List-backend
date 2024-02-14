const mongoose = require('mongoose');
const  express = require('express');
require("dotenv").config();


const routes = require("./routes/TodoRoutes");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000

//middleware
app.use(cors())

app.use(express.json())

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected sucessfully .....'))
.catch((err)=> console.log(err));

app.use('/api', routes);

app.listen(PORT , ()=>console.log('server running on port 5000'));
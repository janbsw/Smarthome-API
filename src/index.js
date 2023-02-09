const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const lamp = require('./routes/lamp')


const app = express();
app.use(morgan('common'))
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use('/api/lamp', lamp)

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

const port = process.env.PORT

app.listen(port, () =>{
    console.log('Listening at port ' + port)
})

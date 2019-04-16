// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json())
//Setare Cros origin Resource Sharing
app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    // Clientul trimite request sa vada la cu ce optiuni poate acces API
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})
app.use(express.urlencoded({ extended: true }))
app.use(require('./server/routes/index.routes'))
// // First route
// app.get('/', (req, res) => {
//     res.json({ message: 'Hello world' })
// })
// Starting server
app.listen('1337')
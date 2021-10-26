const express = require('express')
const { userRoutes } = require('./routes/userRoutes')

const app = express()

// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })

app.use('/data', userRoutes)


app.listen(3000, ()=>{console.log('listining to port 3000...')})
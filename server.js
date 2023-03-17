const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 5000 

app.get('/',(req,res) => res.send('Hello World'))

app.listen(port,()=> console.log('Server started on port ${port}!')) 
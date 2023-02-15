const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const logger = require('morgan')

const app = express(feathers());

app.use('/probando',(req,res,next)=>{
    res.status(200).send({
        msg:'probando exitoso'
    })
})

app.listen(5001,err=>{
    console.log('feathers esta funcionando');
})
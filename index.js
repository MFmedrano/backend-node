require('dotenv').config();
const express = require('express');
const cors = require('cors');


const { dbConecction } = require('./database/config');

//Crea el servidor de express
const app = new express();

//Configurar CORS
app.use(cors());

//Base de Datos
dbConecction();

console.log(process.env);
//mean
//s0zfJtswEFYI9CM2

//Rutas
app.get('/',(req,res) => {

    res.json({
        ok:true,
        msg:'Test get'
    })
});

app.listen(process.env.PORT,()=>{

    console.log('',3000);
});
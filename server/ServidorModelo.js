//const express = require('express')
import express from 'express'
import {rutas} from '../routes/rutas.js'

export class Servidor{

   

    constructor(){

        this.app = express()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log(process.env.PORT)
        })
    }

    enrutarPeticiones(){

       this.app.use("/",rutas)


    }




}
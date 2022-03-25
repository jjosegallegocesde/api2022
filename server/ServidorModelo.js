//const express = require('express')
import express from 'express'

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

        this.app.get('/API/v1/jugadores', function (req, res) {
            res.send('Hello World')
        })

        this.app.post('/', function (req, res) {
            res.send('Hello World')
        })


    }




}
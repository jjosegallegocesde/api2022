import express from 'express'

export let rutas=express.Router()

rutas.get('/API/v1/jugadores', function (req, res) {
    res.json('HOLA MUNDO')
})
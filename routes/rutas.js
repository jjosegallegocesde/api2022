import express from 'express'


import {buscarJugador} from '../controllers/controlador.js'

export let rutas=express.Router()

rutas.get('/API/v1/jugadores', buscarJugador)
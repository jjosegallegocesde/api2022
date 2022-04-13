import express from 'express'
import {Controlador} from '../controllers/controlador.js'

export let rutas=express.Router()
let controlador=new Controlador()

rutas.get('/API/v1/general', controlador.buscar)
rutas.get('/API/v1/general/:id', controlador.buscarPorId)
rutas.post('/API/v1/general', controlador.insertar)
rutas.put('/API/v1/general/:id', controlador.editar)
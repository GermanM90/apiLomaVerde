import express from 'express'
import { ControladorHabitacion } from './controllers/ControladorHabitaciones.js'
import { ControladorReservas } from './controllers/ControladorReservas';

// Para poder llamar al controlador, debo crear un objeto de la clase controladorHabitacion
let controladorHabitacion = new ControladorHabitacion();
let controladorReservas = new ControladorReservas();

export let rutas= express.Router()


rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionPorID)
rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion)
//////////////////Habitaciones//////////////////////////////////
rutas.post('/api/reservas', controladorReservas.registrarReservas)
rutas.get('/api/reserva/:id', controladorReservas.buscarReservaPorID)
rutas.post('/api/reservas', controladorHabitacion.buscarHabitaciones)
rutas.put('/api/reservas/:id', controladorReservas.modificarReserva)
rutas.delete('/api/reservas/:id', controladorReservas.borrarReserva)
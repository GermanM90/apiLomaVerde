export class ControladorHabitacion{
    constructor(){}

    registrarHabitacion(peticion,respuesta){
        try{
            //1. Esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar=peticion.body
            //2. Validar los datos
            //3. Intentar guardar los datos
            //4. Responder
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de guardado",
                "datos":"acá van los datos que se guardaron"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operación de guardado"+error
            })
        }
    }
    buscarHabitaciones(peticion,respuesta){
        try{
            //1. Intentar buscar los datos en BD
            //2. Responder
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de busqueda",
                "datos":"acá van los datos que se buscaron"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operación de guardado"+error
            })
        }
    }
    buscarHabitacionPorID(peticion,respuesta){
        try{
            //1. Esculcar los parametros de la peticion
            let idHabitacionBuscar=peticion.params.id
            //2. Validar el dato que llegó
            //3. Intento buscar el dato en BD
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de busqueda",
                "datos":"acá van los datos que se buscaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operación de guardado"+error
            })
        }
    }
    modificarHabitacion(peticion,respuesta){
        try{
            //1. Traigo el Id de editar de la peticion
            let idHabitacionModificar=peticion.params.id
            let datosHabitacionModificar=peticion.body
            //2. Validar los datos
            //3. Intento buscar y modificar en BD
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de edicion",
                "datos":"acá van los datos que se editaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operación de guardado"+error
            })
        }
    }
    borrarHabitacion(peticion,respuesta){
        try{
            let idHabitacionBorrar=peticion.params.id
            //Validar
            //Intento borrar la habitacion
            respuesta.status(200).json({
                "mensaje":"Exito en la operación de edicion",
                "datos":"acá van los datos que se editaron"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operación de guardado"+error
            })
        }
    }

}
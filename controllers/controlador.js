
export function buscarJugador(request,response){


    try{

        response.status(200).json({
            mensaje:"exito jajaj"
        })

    }catch(error){

        response.status(400).json({
            mensaje:"falla"
        })
        
    }


}
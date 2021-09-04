import React from 'react'

export const Servicios = (props) => {
    return (
        <div id="contenedorServicios">
            <h1>Servicio # {props.numero}</h1>
            <h2>{props.servicio}</h2>
            <input type="button" value="Ver servicios de diseño" id="botonServicios"/>
        </div>
    )
}

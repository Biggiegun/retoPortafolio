//Code here
import '../styles/main.css'

import React from 'react'

export const Proyectos = (props) => {
    return (
        <div>
            <img id="imagenProyecto" src={props.evidencia} alt="" />
            <div id="contenedorProyecto">
                <h1 id="tituloProyecto">{props.titulo}</h1>
                <p id="textoProyecto">{props.texto}</p>
                <input type="button" value="Ver código"id="boton1"/>
                <input type="button" value="Ver proyecto completo"id="boton2"/>
            </div>
        </div>
    )
}

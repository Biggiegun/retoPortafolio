import React from 'react'

export const Testimonios = (props) => {
    return (
        <div id="contenedorTestimonios">
            <h1>Testimonio # {props.test}</h1>
            <img id="fotosTestimonio" src={props.source} alt="user photo" />
            <p id="nombreTestimonio">{props.nombre}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    )
}

import React from 'react'
import '../styled/styles';
import { Presentacion } from '../components/Presentacion';
import { Proyectos } from '../components/Proyectos';
import { Servicios } from '../components/Servicios';
import { Testimonios } from '../components/Testimonios';
import { Contacto } from '../components/Contacto';
import { Divisor } from '../components/Divisor';
import { Component } from 'react'

export default class App extends Component {
constructor(){
    super()
    
}

    render() {

        return(
        <div>
        <Presentacion/>
        <Proyectos titulo="Calculadora IMC" texto="App para calcular el IMC de una persona, también registra estadísticas" evidencia="https://res.cloudinary.com/biggiegun/image/upload/v1630721723/retoPortafolio/Untitled_mngdtg.png"/>
        <Proyectos titulo="Príncipe Fresco" texto="App prototipo tienda de Ropa, basada en Will Smith" evidencia="https://res.cloudinary.com/biggiegun/image/upload/v1630721720/retoPortafolio/principeFresco_dnavyu.png"/>
        <Proyectos titulo="Página Tributo" texto="Página homenaje al escritor Estadounidense John Grisham" evidencia="https://res.cloudinary.com/biggiegun/image/upload/v1630721719/retoPortafolio/grisham_v2zrps.jpg"/>
        <Divisor/>
        <Servicios servicio="Diseño" numero="1"/>
        <Servicios servicio="Desarrollo" numero="2"/>
        <Servicios servicio="Consultoría" numero="3"/>
        <Divisor/>
        <Testimonios nombre="John Doe" test="1" source="https://res.cloudinary.com/biggiegun/image/upload/v1630718574/retoPortafolio/man2_wyw4xk.jpg"/>
        <Testimonios nombre="Kenny Vargas" test="2" source="https://res.cloudinary.com/biggiegun/image/upload/v1630718574/retoPortafolio/girl1_zbwcjl.jpg"/>
        <Testimonios nombre="Marc Rossero" test="3" source="https://res.cloudinary.com/biggiegun/image/upload/v1630718574/retoPortafolio/man1_vbta4b.jpg"/>
        <Divisor/>
        <Contacto/>
        </div>            
        )
        }


    }



import React from 'react'
import {CuerpoPortafolio} from '../styled/styles'
import {TituloPresentacion} from '../styled/styles'
import {ParrafoPresentacion} from '../styled/styles'
import { MiBoton } from '../styled/styles'
import { Navegacion } from '../styled/styles'

export const Presentacion = () => {
    return (
        <CuerpoPortafolio> 
            <Navegacion>
                <div>Logo</div>
                <MiBoton type="button" value="Currículum" />
            </Navegacion>
            <img id="personalPhoto" src="https://res.cloudinary.com/biggiegun/image/upload/v1630719060/retoPortafolio/1630718713129_s0ozvq.jpg" alt="Personal Photo" />
            <TituloPresentacion>Hola a todos! Soy David Herrera</TituloPresentacion>
            <ParrafoPresentacion>Developer que le encanta implementar diseños que inspiran y atraen a las personas</ParrafoPresentacion>
        <img id="arrow" src="https://res.cloudinary.com/biggiegun/image/upload/v1630718573/retoPortafolio/downArrow_ah9p18.png" alt="Siguiente" />
        </CuerpoPortafolio> 
    ) 
}

import styled from 'styled-components';

const Cuerpo = styled.div`
background-color: #0F0E17;
color: #FFFFFE;
margin: 1em;
`;
const Parrafo = styled.p`
color: #A7A9BE;
`
const Titulo = styled.h1`
color: #FFFFFE;
`
const Boton = styled.input`
background-color: orange;
border:none;
margin: 1em;
padding: 1em;
`
const Navegar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center
`

export const CuerpoPortafolio = Cuerpo;
export const TituloPresentacion = Titulo;
export const ParrafoPresentacion = Parrafo;
export const MiBoton = Boton;
export const Navegacion = Navegar;
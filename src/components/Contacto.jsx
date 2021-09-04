import React from 'react'



export const Contacto = () => {
    return (
        <div id="contenedorContacto">
            <form action="onSubmit">
                <h1>Contacto</h1>
                <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
                <input type="text" placeholder="Nombre completo"/>
                <input type="text" placeholder="Correo electrónico"/>
                <textarea name="textArea" id="textArea" cols="22" rows="10" placeholder="Mensaje">
                </textarea>
                <button>Enviar Mensaje</button>
            </form>
            <footer>
                <h1>LOGO</h1>
                <p>Hecho con 🤍 de David</p>
                <p>Copyright 2021 - Todos los derechos reservados.</p>
                <img className="logos" src="https://res.cloudinary.com/biggiegun/image/upload/v1630718573/retoPortafolio/Github_eonwec.png" alt="Github logo" />
                <img className="logos" src="https://res.cloudinary.com/biggiegun/image/upload/v1630718573/retoPortafolio/instagram_iexm9a.png" alt="Instagram logo" />
                <img className="logos" src="https://res.cloudinary.com/biggiegun/image/upload/v1630718574/retoPortafolio/twitter_sjlmzg.png" alt="Twitter logo" />
            </footer>
        </div>
    )
}

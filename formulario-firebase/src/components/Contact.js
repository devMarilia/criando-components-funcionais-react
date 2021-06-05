import React from 'react'
import {Container} from './ElementsContact'
function Contact() {
    return (
        <Container>
            
            <h1>Contato Formulário</h1>

            <label>Nome:</label>
            <input placeholder="name"/>
                        
            <label>Email</label>
            <input placeholder="email"/>
                        
            <label>Mensagem</label>
            <textarea placeholder="message"/>

            <button type="submit">Enviar</button>

        </Container>
    )
}

export default Contact

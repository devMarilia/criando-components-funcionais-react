import React, { Component } from 'react'
import {Container} from './ElementButtonDownload'
import perfilMah from '../images/ContactMarilia.jpg'
import jsPdf from 'jspdf'


export default class App extends Component {
    pdfGenerate= () => {
        var doc = new  jsPdf("landscape", "px", "a4", "false");
        doc.addImage(perfilMah, "PNG", 70, 20, 500, 400)

        doc.save("CVMarilia Augusta.pdf")
    }
  render() {
    return (
      <Container>
        <div>
          <h1>Download De Arquivos PDF</h1>
          <button onClick={this.pdfGenerate}>clique aqui</button>
        </div>
      </Container>
    )
  }
}

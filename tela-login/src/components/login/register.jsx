import { IsConstructor } from 'es-abstract/es2019'
import React from 'react'

import loginImg from '../../img/login.svg'

export class Register extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Cadastro</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="imagem de mulher programando"/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Nome</label>
                <input type="text" name="username" placeholder="nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" placeholder="senha" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Cadastro 
            </button>
          </div>
        </div>
      );
    }
  }
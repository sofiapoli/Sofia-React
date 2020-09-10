import React, { Component } from 'react'
import { render } from '@testing-library/react'

  /* Renderizado */
class LoginButton extends Component {
    render() {
        return <button> Iniciar Sesion </button>
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p> Bienvenido Usuario!</p>
                <button> Cerrar Sesion </button>
            </div>
        )
    }
}


export default class ConditionalSections extends Component {
    constructor(){
        super()
        this.state = {isUserLogged: true}
    }
    render (){
        

        return (
            <div> 
              <h4> Conditional Rendering </h4>
             { this.state.isUserLogged 
                 ? <LoginButton /> 
                 : <LogoutButton/>
             }
             </div>
        )
    }
}
import React, { Component } from 'react'

export default class Forms extends Component {
    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label> Nombre:</label>
                        <imput
                        id='name'
                        name= 'userName'
                        placeholder='Introduce el nombre' />
                    </p>
                        <label> Nombre:</label>
                        <imput
                        id='twitter'
                        name= 'userName'
                        placeholder='Introduce el nombre' />
                    <p>
                        
                    </p>
                </form>
            </div>
        )
    }
}
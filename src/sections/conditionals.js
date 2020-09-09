import React, { Component } from 'react'
import { render } from '@testing-library/react'

class ComponenteA extends Component {
    render() {
        return <p> Componente A </p>
    }
}

class ComponenteB extends Component {
    render() {
        return <p> Componente B </p>
    }
}

function useConditionalRendering (mostrarA){
    if (mostrarA){
        return <ComponenteA/>
    }
        return <ComponenteB />
}

export default class ConditionalSections extends Component {
    constructor(){
        super()
        this.state = {mostrarA: true}
    }
    render (){
        const conditionalComponent = useConditionalRendering(this.state.mostrarA)
        return (
            <div> 
              <h4> Conditional Rendering </h4>
              {conditionalComponent}

             </div>
        )
    }
}
import React, {Component} from 'react';
import './App.css';

// Ejemplo de OnClick
class App2 extends Component{
    constructor () {
        super()
        this.state = { mouseX: 0, mouseY: 0}
        //this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove = (e) =>  {
        const { clientX, clientY} = e
        this.setState({ mouseX: clientX, mouseY: clientY})
    }


    handleClick (e){
        console.log(e)
        console.log(e.nativeEvent)
        alert('Hola Guille')
    }
    render (){ 
        
        return(
            <div className='App'>
              <h4> Eventos </h4>
              <button onClick={this.handleClick}> 
              Saludo 
              </button>
              <div
                onMouseMove={this.handleMouseMove}
                style={{ border: '3px solid #AB47BC ',
                         marginTop: 10,
                         padding:10 }}>
                <p>{this.state.mouseX}, {this.state.mouseY}</p>
              </div>           
            </div>       
        )
    }
}

export default App2;
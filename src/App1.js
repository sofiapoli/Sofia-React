import React, { Component } from 'react';
import cars from './dataListas/cars.json';
import './App.css';


/*Ejemplo recorriendo una lista de numeros 
class App extends Component {
    render (){
        const numbers = [1, 2, 3, 4, 5]

        return (
            <div className = "App">
             <h4> Trabajando con listas </h4>
             {numbers.map( (number, index) =>{
                 return <p key= {index}>Soy el numero {number}</p>
             })}
            </div>

        );
    }
}
*/

/* Listas de objetos */

class CarItem extends Component {
    render (){
        const { car } = this.props
        
        return (
            <li>
                <p><strong>Nombre :</strong>{car.name}</p>
                <p><strong>Marca :</strong>{car.company}</p>
            </li>
        )
    }
}

class App1 extends Component {
    render (){
        

        return (
            <div className = "App">
             <h4> Trabajando con listas de Objetos </h4>
             <ul>
               {
                cars.map(car => {
                  return <CarItem key={car.id} car={car}/>

                  
                 })
                }
             </ul>
            </div>

        );
    }
}

export default App1;

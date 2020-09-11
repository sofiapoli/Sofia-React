import React, {Component} from 'react';
import './App.css';
 // children 
 
class Box extends Component {
    render() {
      return (
          <div style ={{
               textAlign: "center",
               border: '1px solid #09f',
               margin: 5, 
               padding: 5}} >
            {this.props.children}
           </div>
      )
    }
}

class Article extends Component {
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}

class App3 extends Component {
    render (){
        return (
            <div className="App3">
               <h4>
                   Children props
               </h4>
               <Article
                   author='sofia'
                   date={new Date().toLocaleDateString()}
                   title='Articulo sobre la prop children'
                   >
                    <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children</p>
                    <strong> Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
               </Article>
            </div>
        )
    }
}

export default App3;
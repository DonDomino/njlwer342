import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super()
    this.state = {
      text : "",
      tasks : ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    }
    this.trackInput = this.trackInput.bind(this);
    this.addTask = this.addTask.bind(this)
  }

  trackInput(event){
    this.setState({
      text : event.target.value
    })
  }

  addTask(event){
    event.preventDefault();
    this.setState({
      tasks : this.state.tasks.concat(this.state.text),
      text : ""
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map(task =>
              <li>{task}</li>
            )}
          </ul>
           <form onSubmit={this.addTask}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.text} onChange={this.trackInput}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;

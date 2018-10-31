import React, { Component } from 'react';
import './App.css';
import ToDoElement from './components/ToDoElement';
import NewElement from './components/NewElement';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{id: 1, text: "Sample Task", done: false}],
      task_number: 2
    };
  }

  handleDoneClick(id){
    const tasks = this.state.tasks;
    // Mark as done
    for(let i=0; i<tasks.length;i++){
      if(tasks[i].id === id){
        tasks[i].done = !tasks[i].done;
        break;
      }
    }
    // Change state
    this.setState({
      tasks: tasks
    }); 
  }

  handleDeleteClick(id){
    // Remove task
    var tasks = this.state.tasks;
    // Delete
    for( var i = 0; i < tasks.length; i++){ 
       if ( tasks[i].id === id) {
         tasks.splice(i, 1); 
       }
    }
    this.setState({
      tasks: tasks
    });
  }

  handleAddTaskClick(text){
    var task_counter = this.state.task_number;
    const tasks = this.state.tasks;
    // Add to state and increase counter by one
    this.setState({
      tasks: tasks.concat([{
        id: task_counter,
        text: text,
        done: false
      }]),
      task_number: task_counter+1
    });
  }

  render() {
    const taskList = this.state.tasks;
    const tasksRender = taskList.map((task) => {
      let doneText = "Mark as ";
      doneText += task.done ? "Pending" : "Done";
      return (
          <ToDoElement
              key={task.id}
              id={task.id} 
              text={task.text}
              doneText={doneText}
              onDoneClick={() => this.handleDoneClick(task.id)}
              deleteText="Delete"
              onDeleteClick={() => this.handleDeleteClick(task.id)}
          />
      );
    });

    return (
      <div className="list">
        <NewElement 
            handleAdd={(text) => this.handleAddTaskClick(text)}
        />
        <div className="todo-list">
          {tasksRender}
        </div>
      </div>
    );
  }
}
// ========================================

export default App;
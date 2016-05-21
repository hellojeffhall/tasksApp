

class CheckForCompleted extends React.Component {
  render() {
    var isCompleted = this.props.isCompleted === "true" ? true : false;
    return (
      <input type="checkbox" defaultChecked={isCompleted} ></input>
    )
  }
}
class TaskTextArea extends React.Component {
  render() {
    return (
      <div className="taskTextArea">{this.props.taskTitle}</div>
    )
  }
}
class TaskRow extends React.Component {
  render() {
    var {
      isCompleted,
      taskTitle
    } = this.props;
    return (
      <div className="taskRow">
        <CheckForCompleted isCompleted={isCompleted} /> 
        <TaskTextArea taskTitle={taskTitle} />
        <button className="delete_button">-</button>
      </div>
    )
  }
}
class RowHolder extends React.Component {
  render() {
    var tasksArrayJSX = this.props.tasksArray.map( function(temp,idx){

      return (
        <TaskRow 
          isCompleted={temp.isCompleted} 
          taskTitle={temp.taskTitle} 
          key={'row_'+idx}
        />
      )
    });
     
    return (
      <div className="rowHolder"> 
        {tasksArrayJSX}
      </div>
    )
  }
}


var tasksArray = [
  {
    taskTitle   : "Eat",
    isCompleted : ""
  }, 
  {
    taskTitle   : "Sleep",
    isCompleted : ""
  },  
  {
    taskTitle   : "Code",
    isCompleted : ""
  }, 
  {
    taskTitle   : "Go to the store",
    isCompleted : ""
  }
];



class App extends React.Component{
  render(){
    return (
      <div>
        <RowHolder tasksArray={tasksArray} />
      </div>
    )
  }
}



ReactDOM.render(
  <RowHolder tasksArray={tasksArray} />,
  document.getElementById('app')
)



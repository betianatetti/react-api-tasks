import React, { Component } from 'react';
import Tasks from './components/tasks';


class App extends Component {

  state={
    tasks:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then((data) =>{
      this.setState({ tasks:data })
    })
    .catch(console.log)
  }

  render(){
    return(
      <Tasks tasks={this.state.tasks}/>
    );
  }
}

/*
Error appear: 
Unchecked runtime.lastError: The message port closed before a response was received.
localhost/:1 Access to fetch at 'http://localhost:3000/tasks' from origin 'http://localhost:3001' has been blocked by CORS policy: 
  No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' 
  to fetch the resource with CORS disabled.
*/


export default App;

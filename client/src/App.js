import React, { Fragment } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';

function App() {
  
  return (
    <Fragment>
      <div className='container'>
        <CreateTask />
        <ListTasks />
      </div>
    </Fragment>
  );
}

export default App;

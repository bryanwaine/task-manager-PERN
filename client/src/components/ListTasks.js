import React, { Fragment, useEffect, useState } from 'react';
import EditTask from './EditTask';

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks');
      const jsonTasks = await response.json();

      setTasks(jsonTasks);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks((oldTasks) => {
        const newTasks = oldTasks.filter((task) => task.task_id !== id);
        return newTasks;
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Fragment>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ task_id, description }) => (
            <tr key={task_id}>
              <td>{description}</td>
              <td>
                <EditTask task={{ task_id, description }} />
                <button
                  className='btn btn-danger ml-3'
                  onClick={() => deleteTask(task_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;

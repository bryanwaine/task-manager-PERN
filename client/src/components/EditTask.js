import React, { Fragment, useState } from 'react';

const EditTask = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/tasks/${task.task_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${task.task_id}`}
      >
        Edit
      </button>

      <div
        className='modal'
        id={`id${task.task_id}`}
        onClick={() => setDescription(task.description)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit Your Task</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={() => setDescription(task.description)}
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                onClick={() => setDescription(task.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTask;

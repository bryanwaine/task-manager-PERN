import React, { Fragment, useState } from 'react';

const CreateTask = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      await fetch('http://localhost:5000/tasks', {
        method: 'POST',
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
      <h1 className='text-center mt-5'>My Task Manager</h1>
      <form className='d-flex mt-5'>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success' onClick={onSubmitForm}>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default CreateTask;

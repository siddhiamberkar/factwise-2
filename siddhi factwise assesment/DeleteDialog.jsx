import React from 'react';

const DeleteDialog = ({ onDelete, onCancel }) => (
  <div className="delete-dialog">
    <p>Are you sure you want to delete?</p>
    <button onClick={onCancel}>Cancel</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default DeleteDialog;

import React, { useState } from 'react';

const UserEdit = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-edit">
      <input name="first" value={formData.first} onChange={handleChange} />
      <input name="last" value={formData.last} onChange={handleChange} />
      <input name="dob" value={formData.dob} onChange={handleChange} />
      <input name="gender" value={formData.gender} onChange={handleChange} />
      <input name="country" value={formData.country} onChange={handleChange} />
      <textarea name="description" value={formData.description} onChange={handleChange} />
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UserEdit;


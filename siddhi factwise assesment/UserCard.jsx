import React, { useState } from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="user-card">
      <div className="header" onClick={toggleOpen}>
        <img src={user.picture} alt={`${user.first} ${user.last}`} />
        <span>{`${user.first} ${user.last}`}</span>
        <button>{isOpen ? '▲' : '▼'}</button>
      </div>
      {isOpen && (
        <div className="details">
          <p>Age: {user.dob}</p>
          <p>Gender: {user.gender}</p>
          <p>Country: {user.country}</p>
          <p>Description: {user.description}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;

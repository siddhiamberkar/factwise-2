import React, { useState } from 'react';
import UserCard from './UserCard';
import UserEdit from './UserEdit';
import DeleteDialog from './DeleteDialog';
import users from './celebrities.json';

const UserList = () => {
  const [userList, setUserList] = useState(users);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);

  const handleEdit = (user) => setEditingUser(user);
  const handleDelete = (userId) => setDeletingUserId(userId);

  const saveUser = (updatedUser) => {
    setUserList(userList.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = () => {
    setUserList(userList.filter(user => user.id !== deletingUserId));
    setDeletingUserId(null);
  };

  return (
    <div className="user-list">
      {userList.map(user => (
        <UserCard key={user.id} user={user} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
      {editingUser && <UserEdit user={editingUser} onSave={saveUser} onCancel={() => setEditingUser(null)} />}
      {deletingUserId && <DeleteDialog onDelete={deleteUser} onCancel={() => setDeletingUserId(null)} />}
    </div>
  );
};

export default UserList;

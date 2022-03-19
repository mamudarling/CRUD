import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3001/users');
    setUsers(result.data.reverse());
  };

  return (
    <div className='conatiner'>
      <div className='py-4'>
        <h1> Home page</h1>
        <table class='table border shadow'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <a className='btn btn-primary mr-2' href={`/user/${user.id}`}>
                    View
                  </a>
                  <a
                    className='btn btn-outline-primary mr-2'
                    // href={`/users/edit/${user.id}`}
                    href={`/edit/user/${user.id}`}
                  >
                    Edit
                  </a>
                  <a
                    // onClick={() => deleteUser(user.id)}
                    onClick={() => deleteUser(user.id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react'

const Users = () => {

    const [ users, setUsers ] = useState([])
    
    useEffect(() => {

        const getUsers = async () => {

            try {
                const response = await fetch( 'https://demo.schautomate.com.ng/api/users' );
  
                if (response.ok) {
                  const data = await response.json();
                  setUsers(data);

                } else {
                  // Handle error response
                  console.error('Failed to fetch users data');
                }
            } catch (error) {
                console.error('Error fetching users data:', error);       
            }

        };

        getUsers();

    }, []) 

  return (
    <div className='user-container'>

        <h1>Admin's Page (Users)</h1>
        
        <table>
        
            <thead>
              <tr>
                <th style={{width: '25%'}}>Name</th>
                <th style={{width: '30%'}}>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {users.map((user, id) => {
                    return (
                        <tr key={id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                              <button>Edit</button> 
                              <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    </div>
  )
}

export {Users}
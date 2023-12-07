import React, { useState, useEffect } from 'react'
import { Aside } from './Aside'

const Users = () => {

    const [ users, setUsers ] = useState([])

    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {

        const getUsers = async () => {

            try {
                const response = await fetch( 'https://demo.schautomate.com.ng/api/users' );
  
                if (response.ok) {
                  const data = await response.json();
                  setUsers(data);
        
                  // Check if the user is an admin based on their role or other criteria
                  const userIsAdmin = data.role === 'admin';
                  setIsAdmin(userIsAdmin);
                  console.log(userIsAdmin)

                } else {
                  // Handle error response
                  console.error('Failed to fetch users data');
                }
            } catch (error) {
                console.error('Error fetching users data:', error);       
            }

          
          //const data = await response.json();
          //console.log(data)
          //setUsers(data);
        };

        getUsers();

    }, []) 

  return (
    <div className='user-container'>

        <Aside />

        <section className='user-main'>

            <h1>Admin's Page (Users)</h1>

            <table>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
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
                                <td>Edit Delete</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </section>

    </div>
  )
}

export {Users}
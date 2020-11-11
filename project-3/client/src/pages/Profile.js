import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
        <div>
            <img src={user.picture} alt={user.name} style={{borderRadius: '50%', height: '10rem', width: '10rem'}}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {JSON.stringify(user, null, 2)}
            <button><a href="/join">Join Chat</a></button>
        </div>
        )
        : (
        <h1>
        user is not authenticated 
        </h1>
        )
    )
}

export default Profile
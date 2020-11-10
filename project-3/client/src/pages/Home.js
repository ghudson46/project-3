import React from 'react';
import LoginButton from '../components/Validation/LoginButton'
import LogoutButton from '../components/Validation/LogoutButton';


function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <LoginButton />
            <LogoutButton />
        </>
    )
}

export default Home


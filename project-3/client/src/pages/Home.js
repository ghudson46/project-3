import React from 'react';
import LoginButton from '../components/Authentication/LoginButton'
import LogoutButton from '../components/Authentication/LogoutButton';


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


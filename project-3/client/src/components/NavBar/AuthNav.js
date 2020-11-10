import React from 'react'
import LoginButton from '../Authentication/LoginButton'
import SignupButton from '../Authentication/SignupButton.js'

function AuthNav() {
    return (
        <div>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <ul>
                <LoginButton />
                <SignupButton />
            </ul>
        </ul>
    </div>
    )
}

export default AuthNav
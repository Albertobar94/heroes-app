import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleClick = () => {
        history.replace('/')
    }

    return (
        <div
            className='container mt-5'
        >
            <h1>LoginScreen</h1>
            <hr/>

            <button 
            onClick={ handleClick }
            className="btn btn-primary">
                Login
            </button>
        </div>
    )
}

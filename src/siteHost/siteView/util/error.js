import React from 'react'

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <a href={window.location.href}>{window.location.href}</a>
            <p>Page not found</p>
        </div>
    )
}

export default NotFound;

import React from 'react'

export default function Read({ params: { id } }) {
    return (
        <div>
            <h2>Read</h2>
            <p>
                paramters: {id}
            </p>
        </div>
    )
}

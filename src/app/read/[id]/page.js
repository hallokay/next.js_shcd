import React from 'react'

export default async function Read({ params: { id } }) {
    const res = await fetch(`http://localhost:9999/topics/${id}`);
    const data = await res.json();

    return (
        <div>
            <h2>{data.title}</h2>
            <p>
                {data.body}
            </p>
        </div>
    )
}

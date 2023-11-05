import React from 'react'

export default async function Read({ params: { id } }) {
    const res = await fetch(`http://localhost:9999/topics/${id}`, { cache: 'no-store' });
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h2>{data.title}</h2>
            <p>
                {data.body}
            </p>
        </div>
    )
}

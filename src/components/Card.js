import React from 'react'

export default function Card({ object }) {
    return (
        <>
            {object && <img src={object.image} />}
        </>

    )
}

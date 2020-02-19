import React from 'react'


const resultItem = (props) => (
    <main>
        <h3>{props.info.field_1}</h3>
        <p>{props.address.street}, {props.address.city} {props.address.state} {props.address.zip}</p>
        <a href='#'>More Info</a>
    </main>
)

export default resultItem
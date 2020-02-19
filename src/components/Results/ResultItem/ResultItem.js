import React from 'react'


const resultItem = (props) => (
    <main>
        <h3>{props.custName}</h3>
        <p>{props.address.street}, {props.address.city} {props.address.state} {props.address.zip}</p>
    </main>
)

export default resultItem
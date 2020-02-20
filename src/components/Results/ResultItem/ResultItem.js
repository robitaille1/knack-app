import React from 'react'
import MapContainer from './MapContainer/MapContainer'
import './ResultItem.css'


const resultItem = (props) => (
    <main className='ResultItem'>
        <h3>{props.custInfo.field_1}</h3>

        <p>{props.custInfo.field_7_raw.formatted}</p>
        <p>{props.custInfo.field_6_raw.email}</p>
        <p><strong>Status:</strong> {props.custInfo.field_9}</p>
        <p><strong>Notes:</strong> {props.custInfo.field_8}</p>

        <p>{props.address.street}, {props.address.city} {props.address.state} {props.address.zip}</p>
        <MapContainer lat={props.custInfo.field_10} long={props.custInfo.field_11}  address={props.address} />  
    </main>
)

export default resultItem
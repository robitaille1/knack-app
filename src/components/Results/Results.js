import React from 'react'
import ResultItem from './ResultItem/ResultItem'
import './Results.css'

const results = (props) => (
    <main className='Results'>
        { props.clicked === true && props.customers.length === 0 ?
            <div className='error'>
                <h2>No results found. Please try again</h2>
            </div>
             : props.customers.map(customer => (
                <ResultItem key={customer.id} address={customer.field_2_raw} custInfo={customer} />
            ))}
    </main>
)

export default results
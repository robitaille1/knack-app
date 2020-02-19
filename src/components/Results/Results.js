import React from 'react'
import ResultItem from './ResultItem/ResultItem'

const results = (props) => (
    <main>
        {props.customers.map(customer => (
            <ResultItem key={customer.id} address={customer.field_2_raw} custName={customer.field_1} />
        ))}
    </main>
)

export default results
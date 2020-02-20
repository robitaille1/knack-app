import React from 'react'
import './CustomerSearch.css'

const customerSearch = (props) => (
    <main className='CustomerSearch'>
        <h1 className='Header'>Search for a customer by last name</h1>
        <form onSubmit={props.search}>
            <input placeholder='ex. Robitaille' type='text' name='query'/>
            <button>Search</button>
        </form>
    </main>
)

export default customerSearch
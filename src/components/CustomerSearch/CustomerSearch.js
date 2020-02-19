import React from 'react'

const customerSearch = (props) => (
    <main>
        <form onSubmit={props.search}>
            <input type='text' name='query'/>
            <button>Search</button>
        </form>
    </main>
)

export default customerSearch
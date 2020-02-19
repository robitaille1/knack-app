import React from 'react'

const customerSearch = (props) => (
    <main>
        <form onSubmit={props.search}>
            <input type='text'/>
            <button>Search</button>
        </form>
    </main>
)

export default customerSearch
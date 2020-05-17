import React from 'react'

function Form(props) {
    return (
        <form onSubmit={props.getWeather}>
           <input type="text" name='city' placeholder="city"/>
           <input type="text" name='country' placeholder="country"/>
           <button >Submit</button>
        </form>
    )
}

export default Form

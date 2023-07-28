import React from 'react'
import QuotesForm from './QuotesForm'

function AddQuote(props){
    const {addItem} = props

    function formSubmit(fromData){
        addItem(fromData)
    }
    return(
        <div>

           <QuotesForm formSubmit={formSubmit}/>             
        </div>
    )
}

export default AddQuote
import React from 'react'
import QuotesForm from './QuotesForm'

function EditQuote(props){
    const {id, name, body, editItem, handleToggle} = props

    function formSubmit(fromData){          // both function name should be same because from our AddQuote component passing as props and function
       editItem( fromData)
    }

    return(
        <div>
          <h1>Edit quotes</h1> 
          <QuotesForm _id={id} name={name} body={body} formSubmit={formSubmit} handleToggle={handleToggle} />
        </div>
    )
}

export default EditQuote
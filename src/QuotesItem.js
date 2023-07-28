import React, {useState} from 'react'
import EditQuote from './EditQuote' 


function QuotesItem(props){
    const {id, name, body, removeItem, editItem} = props
    const[ toggle, setToggle] =  useState(false)

    function handleRemove(){
        const confirmation = window.confirm("Are you sure")
        if(confirmation){          
           removeItem(id)
        }
    }
    

    function handleToggle(){
        const result = !toggle     //if toggle is false --- not false = true
        setToggle(result)
    }

   
    return(
        <div>
            {toggle ? (<div><EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle} /> 
                          <button onClick={handleToggle}> Cancel</button>
                        </div>) 
            : (<div>
                <blockquote>{body} - {name}    </blockquote>               
                <button onClick={handleToggle} > edit </button>
                <button onClick={ handleRemove} > remove </button>
               </div>)
            }
         
        </div>
    )
}
export default QuotesItem
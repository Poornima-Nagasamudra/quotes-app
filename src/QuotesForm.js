import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function QuotesForm(props){
    const { formSubmit, id:slNo ,  name :author, body: description, handleToggle} = props  // name treated as author its es6 feature

    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const[name, setName] = useState(author ? author : '' )
    const[body, setBody] = useState( description ? description : '')   

    const handleSubmit = (e) =>{
            e.preventDefault()

            const fromData = {
                //   id: uuidv4(), this can keep now to state variable
                id: id,
                name: name,
                body : body
            }
            formSubmit(fromData)

            // reset fromdata
            if(handleToggle){
                handleToggle()
            }
            setName('')
            setBody('')
    }

    const handleChange = (e)=>{
        setName(e.target.value)
    }

    const handleBody = (e)=>{
        setBody(e.target.value)
    }
    return(
        <div>
            <h1> Add Quote</h1>

            <form onSubmit={handleSubmit} >
                <label> Name </label> <br/>
                <input type="text" value={name} onChange={handleChange} /> <br/>

                <label> Body </label> <br/>
                <textarea value={body} onChange={handleBody}  > </textarea> <br/>

                <input type="submit" value="save"/>
            </form>
            
        </div>
    )
}


export default QuotesForm
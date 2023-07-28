import React, { useState , useEffect } from 'react'

import QuotesList from './QuotesList'
import AddQuote from './AddQuote'

function QuotesContainer(props){
    const[quotes, setQuotes] = useState([])

    useEffect(()=>{                                               // read the value from localstorage
       //console.log (localStorage.getItem('quotes')) //null
      // console.log(false || [])  //[]
      const result1 = JSON.parse(localStorage.getItem('quotes')) || []
      setQuotes(result1)
    }, [])                                                         // only once

    function addItem(qut){
        const result = [ qut,...quotes]
        setQuotes(result)
    }

    // when adding new quotes and name, this will call
    useEffect(()=>{
       localStorage.setItem('quotes', JSON.stringify(quotes))

    }, [quotes])

    function removeItem(id){
        const result = quotes.filter((qut)=>{
            return qut.id !== id
        })
        setQuotes(result)
    }

    function editItem(qut){
        const result = quotes.map((q)=>{
            if(q.id === qut.id){
                return {...q, ...qut}
            } else {
                return {...q}
            }
        })
        setQuotes(result)
    }

    return (
        <div>
           <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem} />
        
           <AddQuote addItem={addItem} />
        </div>
    )
}

export default QuotesContainer
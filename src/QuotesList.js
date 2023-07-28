import React from 'react'
import QuotesItem from './QuotesItem'

function QuotesList(props){
    const { quotes, removeItem, editItem } = props

    return(
        <div>
            {  quotes.length === 0 ? (<div><h1>No quotes found </h1> 
                                      <p> Add first quote</p></div>) :                 
                (<div><h1> My Quotes - {quotes.length}</h1>
                   { quotes.map (function(qut){
                      return <QuotesItem key={qut.id} {...qut} removeItem={removeItem} editItem={editItem}/>
                   })}
                   
                </div>)
            } 
         
        </div>
    )
}

export default QuotesList

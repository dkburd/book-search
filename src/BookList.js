import React, {useEffect} from 'react';
import Book from './Book'

export default function BookList({books}) {
  // const {books} = props 
  console.log("?????????", books)
  return (
    <div>
      {books && books.length > 0 && (
        books.map((book,i)=>(
          <Book listItem={book}/>
        ))
      )}
      {!books || books.length < 1 && (
        <p>no books</p>
      )}
    </div>
  )
}


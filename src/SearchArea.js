import React, {useState} from 'react';

export default function SearchArea({getBookList}) {

const [searchTerm, setSearchTerm] = useState("")

const getBooks = (e) => {
  e.preventDefault();
  // searchTerm=''
  console.log('SEARCH FOR', searchTerm)

  const apiKey= 'AIzaSyCPujdx0gCyZaR79og4bM5XkqGeFGWY-Ns'
const url=`https://www.googleapis.com/books/v1/volumes?q=search+${searchTerm}:keyes&key=${apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // const books = data.items
        // console.log(data)
        getBookList(data.items)
      });
      
}

const onValueChange = (e) => {
  setSearchTerm(e.target.value)
  // console.log({value:searchTerm})
}

  return (
    <div style={SearchStyle}>
        <form>
        <label for="SearchInput">Search: </label>
        <input type="search" id="searchInput" key='searchInput' name="search-input" onChange={((e) => onValueChange(e) )}></input>
        <input type="submit" value="Search" onClick={getBooks}></input>
        </form>
    </div>
  )
}

const SearchStyle ={
    background:'#808080',
    margin: '0 auto',
    textAlign: 'center',
    padding:'10px',
    margin:'0px',
}





  
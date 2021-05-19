import React from 'react';



export default function SearchArea() {

//make it the value of the input text....
const searchTerm='alien'
// const searchTerm = #searchInput.val()

// getBooks=(e) => {
// preventDefault()
// console.log('fetch will be here')
//   }

// for submit not working onClick={this.getBooks}
  return (
    <div style={SearchStyle}>
        <form>
        <label for="SearchInput">Search: </label>
        <input type="search" id="searchInput" key='searchInput' name="search-input"></input>
        <input type="submit" value="Search" ></input>
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
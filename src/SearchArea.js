import React from 'react';


export default function SearchArea() {
  return (
    <div style={SearchStyle}>
        <form>
        <label for="SearchInput">Search: </label>
        <input type="search" id="searchInput" key='searchInput' name="search-input"></input>
        <input type="submit" value="Search"></input>
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
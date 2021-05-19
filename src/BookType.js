import React from 'react';

export default function BookType() {
  return (
    <div style={filterItemStyle}>
        <label for="BookTypeFilter">Book Type:</label>
        <select id="BookTypeFilter" name="book-type">
            <option value="one">one</option>
            <option value="two">two</option>
        </select>
    </div>
  )
}

const filterItemStyle ={
    display: 'inline-block',
    margin:'0px 5px'
}
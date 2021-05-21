import React from 'react';

export default function PrintType() {
  return (
    <div style={filterItemStyle}>
        <label for="PrintTypeFilter">Print Type:</label>
        <select id="PrintTypeFilter" name="print-type">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
        </select>
    </div>
  )
}

const filterItemStyle ={
    display: 'inline-block',
    margin:'0px 5px'
}
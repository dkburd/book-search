import React from 'react';

export default function PrintType() {
  return (
    <div style={filterItemStyle}>
        <label for="PrintTypeFilter">Print Type:</label>
        <select id="PrintTypeFilter" name="print-type">
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
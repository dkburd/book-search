import React from 'react';

export default function BookType() {
  return (
    <div style={filterItemStyle}>
        <label for="BookTypeFilter">Book Type:</label>
        <select id="BookTypeFilter" name="book-type">
            <option value="no-filter">No Filter</option>
            <option value="all-ebooks">All ebooks</option>
            <option value="free-ebooks">Free ebooks</option>
            <option value="paid-ebooks">Paid ebooks</option>
        </select>
    </div>
  )
}

const filterItemStyle ={
    display: 'inline-block',
    margin:'0px 5px'
}

// {listItem.saleInfo.isEbook} true/false
// {listItem.saleInfo.isEbook&&() }
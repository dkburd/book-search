import React from 'react';
import PrintType from './PrintType'
import BookType from './BookType'

export default function FilterArea() {
  return (
    <div style={filterStyle}>
      <PrintType/>
      <BookType/>
    </div>
  )
}

const filterStyle ={
    background:'#d3d3d3',
    margin: '0px',
    padding:'10px',
    textAlign: 'center',
}
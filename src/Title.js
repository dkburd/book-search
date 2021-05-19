import React from 'react';

export default function Title() {
  return (
    <div style={titleStyle}>
      <h1>Google Book Search</h1>
    </div>
  )
}

const titleStyle ={
    background:'#000',
    color:'#fff',
    margin: '0px',
    padding:'20px',
    textAlign: 'center',
}
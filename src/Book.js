import React from 'react'

const Book = ({listItem}) => {
    // console.log( listItem.volumeInfo)
    return (
        <div style={grid}>
            <div style={bookStyle}>
            {listItem.volumeInfo.title}
            <p>auth:</p>
            {listItem.volumeInfo.authors&&
            listItem.volumeInfo.authors.length>0&&(
                listItem.volumeInfo.authors.map((author, i)=>(
                    <p key={i}>{author}</p>
                ))
            )}
            {listItem.saleInfo.listPrice&&(
            <p> ${listItem.saleInfo.listPrice.amount}</p>
            )}
            {listItem.searchInfo&&(
            <p>{listItem.searchInfo.textSnippet}</p>
            )}
            </div>
            <div style={imgStyle}>
            {listItem.volumeInfo.imageLinks.thumbnail&&(
                <img  src={listItem.volumeInfo.imageLinks.thumbnail}/>
            )}

            </div>
            <br></br>
        </div>
    )
}

export default Book

const grid ={
    display: 'grid',
}

const bookStyle ={
    margin: '5px',
    padding:'5px',
    textAlign: 'center',
    display: 'grid grid',
}

const imgStyle ={
    display:'inline-block',
    display: 'grid grid',
    margin: '5px',
    padding:'5px',
    float:'left'
}
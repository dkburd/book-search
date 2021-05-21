import React from "react";
import Title from './Title';
import SearchArea from './SearchArea';
import FilterArea from './FilterArea';
import BookList from './BookList';


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
    books: [] 
  };
  
  // this.handleClick = this.handleClick.bind(this);
}
  render() {
    const getBookList = (anything) => {
      console.log("GET BOOK LIST CALLED!!!!!")
      console.log(anything)
      this.setState({books:anything})
    }
    return (
      <>
        <header>
          <Title/>
        </header>
        <main>
          <section>
            <SearchArea getBookList={getBookList}/>
            <FilterArea/>
          </section>
          <section>
           <BookList books = {this.state.books}/> 
          </section>
        </main>
      </>
    )
  }
}

export default App;
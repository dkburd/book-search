import React from "react";
import Title from './Title';
import SearchArea from './SearchArea';
import FilterArea from './FilterArea';
import BookArea from './BookArea';


class App extends React.Component {
  // state = {
  //   shoppingItems: [
  //     /* put stub items in here for testing */
  //     { name: 'apples', checked: false },
  //     { name: 'oranges', checked: true },
  //     { name: 'bread', checked: false },
  //   ]
  // };

  render() {
    return (
      <>
        <header>
          <Title/>
        </header>
        <main>
          <section>
            <SearchArea/>
            <FilterArea/>
          </section>
          <section>
           <BookArea/> 
          </section>
        </main>
      </>
    )
  }
}

export default App;
import React from "react";
import TitleTwo from './Title';

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
          <TitleTwo/>
        </header>
        <main>
          <section>
          </section>
        </main>
      </>
    )
  }
}

export default App;

//after using create react app, downgrade so it can be used with enzyme
// npm install react@16.8 and delete node module folder

//if that doesnt work try // npm install --force


//then
// npm install enzyme --save-dev
// then
// npm install enzyme-adapter-react-16 --save-dev
//then
// npm install enzyme-to-json --save-dev

// edit json file to include 

// switch lines in package.json to (around line 9)
// "react": "^16.8.6", 
// "react-dom": "^16.8.6",

// add this to package.json: 

// "jest": {
//   "snapshotSerializers": ["enzyme-to-json/serializer"],
//   "collectCoverageFrom": ["src/**/*.js", "!src/index.js"],
//   "coverageReporters": ["text"]
// }

// setup a configTest.s file with this:
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

// import these things into your test file, along with the file it tests
// import React from 'react';
// import { shallow } from 'enzyme';
// import configTest from './configTest.js' 

// example:
// import Title from './Title';

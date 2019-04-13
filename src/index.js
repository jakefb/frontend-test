import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

import './scss/app.scss';
import './scss/components.scss';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container app-index">
          <h1>One Blue Button</h1>
          <Button
            onClick={() => {
              console.log('Hello World');
            }}
          >
            Hello
          </Button>
          &nbsp;
          <Button
            isLink={true}
            isExternalLink
            isFavourite
            target="_blank"
            href="https://www.xero.com/nz/"
          >
            World
          </Button>
        </div>
      </div>
    );
  }
}

let app = document.getElementById('app');

ReactDOM.render(<App />, app);

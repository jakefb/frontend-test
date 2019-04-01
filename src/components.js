import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';

import './scss/app.scss';
import './scss/components.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="app-heading">Headings</h1>
        <div className="app-example">
          <h1>The Quick brown fox jumps over the lazy dog</h1>
          <h2>The Quick brown fox jumps over the lazy dog</h2>
          <h3>The Quick brown fox jumps over the lazy dog</h3>
          <h4>The Quick brown fox jumps over the lazy dog</h4>
        </div>
        <h1 className="app-heading">Input</h1>
        <div className="app-example">
          <Input />
        </div>
        <h1 className="app-heading">Select</h1>
        <div className="app-example">
          <Select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </div>
        <h1 className="app-heading">Button</h1>
        <div className="app-example">
          <Button>One Blue Button</Button>
        </div>
        <h1 className="app-heading">Link Button</h1>
        <div className="app-example">
          <Button
            isLink={true}
            target="_blank"
            isExternalLink
            href="https://example.com"
            onClick={() => {
              alert('foo bar');
            }}
          >
            I am a link
          </Button>
        </div>
      </div>
    );
  }
}

let app = document.getElementById('app');

ReactDOM.render(<App />, app);

import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';
import GeneItem from './GeneItem';
import Meme from './Meme'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meme: null
    }
    this.generate = this.generate.bind(this)
  }

  generate(event) {
    this.setState({meme: <Meme/>})
  }

  render() {
    return (
      <div className="App">
        <h2>Ways of Memeing</h2>
        <button onClick={this.generate}>
          generate
        </button><br/>
        {this.state.meme}
      </div>
    );
  }
}

export default App;

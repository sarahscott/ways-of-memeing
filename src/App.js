import React, { Component } from 'react';

import Meme from './Meme'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meme: null,
      selectedGene: null
    }
  }

  generate(gene, event) {
    this.setState({meme: <Meme geneID={gene}/>})
  }

  render() {
    const possibleGenes = ["website", "animals", "gender"]

    return (
      <div className="App">
        <h2>Ways of Memeing</h2>
        { possibleGenes.map(gene => (<button key={gene} onClick={this.generate.bind(this, gene)}>{gene}</button>)) }
        <br/><br/><br/><br/>
        { this.state.meme }
      </div>
    );
  }
}

export default App;

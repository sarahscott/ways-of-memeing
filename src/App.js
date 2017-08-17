import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';
import Feed from './Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Ways of Memeing</h2>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppGeneQuery {
              gene (id: "geometric") {
                name
                artworks_connection(first: 10) {
                  edges {
                    node {
                      title
                    }
                  }
                }
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props);
              return <div>{props.gene.name}</div>
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default App;

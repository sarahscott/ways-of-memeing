import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';

class Meme extends Component {
  render() {
    const geneID = "geometric"

    return (
      <div className="Meme">
        <QueryRenderer
          environment={environment}
          query={
            graphql`
              query MemeQuery ($geneID: String!) {
                gene (id: $geneID) {
                  name
                  artworks: artworks_connection(first: 50) {
                    edges {
                      node {
                        image {
                          cropped(width: 500, height: 500) {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
          `
          }
          variables={{geneID: geneID}}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              const artworks = props.gene.artworks.edges
              const chosenOne = artworks[Math.floor(Math.random() * artworks.length)]
              const imageURL = chosenOne.node.image.cropped.url
              return (
                <div>
                  <img alt={'oops'} src={imageURL} />
                </div>
              )
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default Meme

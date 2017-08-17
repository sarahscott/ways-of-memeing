import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';

const captions = [
  "Feed that back into Force’s settings and we have a scraper-blocking flywheel.",
  "the flywheel is turning",
  "Low-hanging fruit",
  "We met at burning man",
  "Had the best time at burning man this year",
  "fly wheel fly",
  "Have you checked Atlas?",
  "tfw you forget to check the swag playbook",
]

class Meme extends Component {
  render() {
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
          variables={{ geneID: this.props.geneID }}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              const artworks = props.gene.artworks.edges
              const chosenArtwork = artworks[Math.floor(Math.random() * artworks.length)]
              const chosenCaption= captions[Math.floor(Math.random() * captions.length)]
              const imageURL = chosenArtwork.node.image.cropped.url
              return (
                <div>
                  <img alt={'oops'} src={imageURL} /><br/><br/><br/>
                  {chosenCaption}
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

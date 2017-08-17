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
  "Is there a Looker for that?",
  "Fly wheel flying high",
  "We're Crushing It",
  "#help",
  "@here",
  "tfw Zoom isn't working",
  "With regard to the issue of content, the iconicity of the purity of line brings within the realm of discourse the larger carcass. ",
  "It's difficult to enter into this work because of how the metaphorical resonance of the sexy fish verges on codifying the accessibility of the work. ",
  "I'm troubled by how the mechanical mark-making of the spatial relationships spatially undermines the inherent overspecificity. ",
  "I find this work menacing/playful because of the way the iconicity of the figurative-narrative line-space matrix endangers the devious simplicity of the remarkable handling of ljght. ",
  "I'm surprised that no one's mentioned yet that the aura of the gesture notates the substructure of critical thinking. ",
  "It's in my genomes",
  "Let's implement scalable action-items",
  "delivering scalable web-readiness",
  "target strategic channels",
  "ANything from https://www.makebullshit.com/",
  "it is all about connecting",
  "big shoutout",
  "coffee ?!",
  "Never a good time for performance reviews",
  "tfw you're waiting for the elevators"
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

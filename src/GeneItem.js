import React, { Component } from 'react'

import {
  graphql,
  createFragmentContainer
} from 'react-relay'

class GeneItem extends Component {
  render() {
    const gene = this.props.gene
    return (
      <div>
        {gene.name}
      </div> 
    )
  }
}

module.exports = createFragmentContainer(GeneItem,
  graphql`
    fragment GeneItem_gene on Gene {
      name
    }
  `
)

export default GeneItem

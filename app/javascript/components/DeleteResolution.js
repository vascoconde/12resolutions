import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DELETE_RESOLUTION_MUTATION = gql`
  mutation DELETE_RESOLUTION_MUTATION($id: ID!) {
    deleteResolution(id: $id) {
      resolution {
        id
      }
    }
  }
`

export default class DeleteResolution extends React.Component {

  render() {

    return (
      <Mutation 
        mutation={DELETE_RESOLUTION_MUTATION} 
        variables={{id: this.props.id}}
        update={this.update}>
        {(deleteResolution, { error }) => (
          <a className="bg-grey-darkest text-white" onClick={() => deleteResolution()} >
            X{this.props.id}
          </a>
          
        )}
       
      </Mutation>
    )  
  }
}
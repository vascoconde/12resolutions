import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_RESOLUTIONS_QUERY } from 'components/List' 

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

  update = (cache, payload) => {

  }

  render() {

    return (
      <Mutation 
        mutation={DELETE_RESOLUTION_MUTATION} 
        variables={{id: this.props.id}}
        update={this.update}
        refetchQueries={() => [{query: ALL_RESOLUTIONS_QUERY}]}
        >

        {(deleteResolution, { error }) => (
          <a className="bg-grey-darkest text-white" onClick={() => deleteResolution()} >
            Remove
          </a>
          
        )}
       
      </Mutation>
    )  
  }
}
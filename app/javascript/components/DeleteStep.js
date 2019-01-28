import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { RESOLUTION_QUERY } from 'components/ShowResolution' 

const DELETE_STEP_MUTATION = gql`
  mutation DELETE_STEP_MUTATION($id: ID!) {
    deleteStep(id: $id) {
      step {
        id
      }
    }
  }
`

export default class DeleteStep extends React.Component {


  render() {

    return (
      <Mutation 
        mutation={DELETE_STEP_MUTATION} 
        variables={{id: this.props.id}}
        refetchQueries={() => [{query: RESOLUTION_QUERY, variables: {id: this.props.resolutionId}}]}
        >

        {(deleteStep, { error }) => (
          <a className="bg-grey-darkest text-white" onClick={() => deleteStep()} >
            ✕
          </a>
          
        )}
       
      </Mutation>
    )  
  }
}
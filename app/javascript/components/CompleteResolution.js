import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_RESOLUTIONS_QUERY } from 'components/List' 

const COMPLETE_RESOLUTION_MUTATION = gql`
  mutation COMPLETE_RESOLUTION_MUTATION($id: ID!, $completed: Boolean!) {
    completeResolution(id: $id, completed: $completed) {
      resolution {
        id
        isCompleted
      }
    }
  }
`

export default class CompleteResolution extends React.Component {

  update = (cache, payload) => {

  }

  render() {

    return (
      <Mutation 
        mutation={COMPLETE_RESOLUTION_MUTATION} 
        variables={{id: this.props.id, completed: !this.props.isCompleted}}
        update={this.update}
        refetchQueries={() => [{query: ALL_RESOLUTIONS_QUERY}]}
        >

        {(completeResolution, { error }) => (
          <a className="bg-grey-darkest text-white" onClick={() => completeResolution()} >
            { this.props.isCompleted ? "Mark uncompleted" :  "Mark completed" }
          </a>
          
        )}
       
      </Mutation>
    )  
  }
}
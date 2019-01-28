import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RESOLUTION_QUERY } from 'components/ShowResolution' 

const CREATE_STEP_MUTATION = gql`
  mutation CREATE_STEP_MUTATION($title: String!, $resolutionId: ID!) {
    createStep(title: $title, resolutionId: $resolutionId) {
      step {
      	id
      	title
      }
    }
  }
`

export default class CreateStep extends React.Component {
  state = {
    title: '',
  }

  render() {
    const { title } = this.state

    return (
      <div>

        <form onSubmit={(e) => { e.preventDefault(); }}>

        <div className="flex flex-column mt-3">
          <input
            className=""
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="New step"
          />
        </div>
			<Mutation 
        mutation={CREATE_STEP_MUTATION} 
        variables={{ title, resolutionId: this.props.resolutionId }}
        onCompleted={() => this.setState({title: ""}) }
        refetchQueries={() => [{query: RESOLUTION_QUERY, variables: {id: this.props.resolutionId}}]}
      >
  		    {stepMutation => <button type="submit" onClick={stepMutation}>Submit</button>}
			</Mutation>
      </form>
      </div>
    )
  }
}

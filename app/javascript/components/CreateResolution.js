import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const RESOLUTION_MUTATION = gql`
  mutation ResolutionMutation($title: String!, $description: String!) {
    createResolution(title: $title, description: $description) {
      resolution {
      	id
      	title
      	description
      }
    }
  }
`

export default class CreateResolution extends React.Component {
  state = {
    title: '',
    description: ''
  }


  render() {
    const { title, description } = this.state

    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="title"
          />
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="description"
          />

        </div>
			<Mutation mutation={RESOLUTION_MUTATION} variables={{ title, description }}>
  				{postMutation => <button onClick={postMutation}>Submit</button>}
			</Mutation>
      </div>
    )
  }
}

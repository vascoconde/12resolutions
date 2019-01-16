import React from "react"
import PropTypes from "prop-types"

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_RESOLUTIONS_QUERY } from 'components/List' 

const RESOLUTION_MUTATION = gql`
  mutation ResolutionMutation($title: String!, $description: String) {
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

        <form onSubmit={(e) => { e.preventDefault(); }}>

        <div className="flex m-4 flex-column mt3">
          <input
            className="bg-grey-lighter max-w-sm w-full p-3 mr-3 inline-block text-2xl"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="I will..."
          />
			<Mutation 
        mutation={RESOLUTION_MUTATION} 
        variables={{ title, description }}
        onCompleted={() => this.setState({title: ""})}
        refetchQueries={() => [{query: ALL_RESOLUTIONS_QUERY}]}
      >
  		    {postMutation => <button className="inline-block" type="submit" onClick={postMutation}>GO</button>}
			</Mutation>
              </div>

      </form>
      </div>
    )
  }
}

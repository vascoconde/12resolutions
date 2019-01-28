import React from "react"
import PropTypes from "prop-types"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_RESOLUTIONS_QUERY } from 'components/List' 
import CompleteResolution from 'components/CompleteResolution'
import DeleteResolution from 'components/DeleteResolution'
import CreateStep from 'components/CreateStep'
import DeleteStep from 'components/DeleteStep'

export const RESOLUTION_QUERY = gql`
    query RESOLUTION_QUERY($id: ID!) {
        resolution(id: $id) {
          id
          title
          description
          isCompleted
          steps {
            id
            title
          }
        }
    }

`

export default class ShowResolution extends React.Component {
  state = {
    title: '',
    description: ''
  }

  render() {
    const { title, description } = this.state

    return (
      <div>
        <Query query={RESOLUTION_QUERY} variables={{id: this.props.id}}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>

            const resolution = data.resolution 
            console.log( resolution )
            return( 
              <div className="fixed pin w-full h-full overflow-scroll bg-white-60">
                <div className="relative  max-w-sm mx-auto my-5 rounded overflow-hidden bg-white shadow-lg">
                  <div 
                    className="absolute h-6 w-6 p-1 text-center rounded-full opacity-75 hover:opacity-100 cursor-pointer m-2 color-black bg-white pin-t pin-r"
                    onClick={this.props.closeModalHandler}
                    >✕</div>
                  <img className="w-full" src={ `https://source.unsplash.com/900x350/?${resolution.title}` } alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{resolution.title} {resolution.isCompleted && "✓"}</div>
                    <p className="text-grey-darker text-base">
                     {resolution.description}
                    </p>


                 { resolution.steps.map(step => {
                    return(
                      <p key={step.id}>{step.title} <DeleteStep id={step.id} resolutionId={resolution.id} /></p>
                    );
                  }) }

                  <CreateStep resolutionId={this.props.id}/>

                  </div>
                  <div className="text-center mb-4">
                  <p className="my-1">
                    <CompleteResolution id={this.props.id} isCompleted={resolution.isCompleted}/> 
                  </p>
                  <p className="my-1">
                  <DeleteResolution id={this.props.id} closeModalHandler={this.props.closeModalHandler}/> 
                  </p>
                  </div>

                </div>

              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

import React from "react"
import PropTypes from "prop-types"
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import CreateResolution from 'components/CreateResolution'
import ShowResolution from 'components/ShowResolution'

const client = new ApolloClient()

const ALL_RESOLUTIONS_QUERY = gql `
  {
    resolutions {
      id
      title
      description
    }
  }
`

class List extends React.Component {

	state = {
		showResolutionModel: false,
    currentResolutionID: null,
  } 

  showModal = (resolutionId) => {
  	this.setState({
  		showResolutionModel: true,
  		currentResolutionID: resolutionId
  	})
  }

  closeModal = () => {
  	this.setState({
  		showResolutionModel: false,
  		currentResolutionID: null
  	})
  }


  render () {

    return (
   	  <ApolloProvider client={client}>
	      	<CreateResolution />

   	  		<div className="flex flex-row flex-wrap">

	      	  <Query query={ALL_RESOLUTIONS_QUERY}>
	      	     {({ loading, error, data }) => {
			        if (loading) return <div>Fetching</div>
			        if (error) return <div>Error</div>
			    
			          const res = data.resolutions.map( el => 
			          	<div key={el.id} onClick={() => this.showModal(el.id)}
			          		className="w-64 rounded-lg overflow-hidden shadow-md relative m-4 group">
										<img className="block" src={ `https://source.unsplash.com/1400x1000/?${el.title}` }/>
										<div className="absolute bg-black opacity-40 group-hover:opacity-25 pin flex items-center justify-center"></div>
										<div className="absolute pin flex items-center justify-center">
											<p className="text-center text-white text-2xl ">{el.title}</p>
										</div>
									</div>
			          )
			    
			          return (
			          	<React.Fragment>
			              {res}
			            </React.Fragment>

			          )
			        }}
  				</Query>


  				{ this.state.showResolutionModel &&
  					<ShowResolution id={this.state.currentResolutionID} closeModalHandler={this.closeModal}/> }
	      </div>
      </ApolloProvider>
    );

  }
}


export default List;
export {ALL_RESOLUTIONS_QUERY}; 

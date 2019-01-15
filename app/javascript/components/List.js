import React from "react"
import PropTypes from "prop-types"
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import CreateResolution from 'components/CreateResolution'
import DeleteResolution from 'components/DeleteResolution'



const httpLink = createHttpLink({
  uri: '/graphql'
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

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


  render () {

    return (
   	  <ApolloProvider client={client}>

	      <React.Fragment>	
	      	<CreateResolution />
	      	  <Query query={ALL_RESOLUTIONS_QUERY}>
	      	     {({ loading, error, data }) => {
			        if (loading) return <div>Fetching</div>
			        if (error) return <div>Error</div>
			    
			          const res = data.resolutions.map( el => 
			          	<div key={el.id} className="w-64 rounded-lg overflow-hidden shadow-md relative m-4">
							<img className="block" src="https://source.unsplash.com/1400x1000/?japan" />
							<div className="absolute bg-white opacity-50 pin flex items-center justify-center">
								<p className="text-center text-xl ">{el.title} <br /> <DeleteResolution id={el.id} />	</p>

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

	      </React.Fragment>
      </ApolloProvider>
    );

  }
}

//registerServiceWorker()


export default List;
export {ALL_RESOLUTIONS_QUERY}; 

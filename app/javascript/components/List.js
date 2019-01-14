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

const FEED_QUERY = gql `
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
	      	<p>Hey</p>
	      	  <Query query={FEED_QUERY}>


	      	     {({ loading, error, data }) => {
			        if (loading) return <div>Fetching</div>
			        if (error) return <div>Error</div>
			    
			          const res = data.resolutions.map( el => 
			          	<p key={el.id}>{el.title} <DeleteResolution id={el.id} /></p>
			          )
			    
			          return (
			            <div>
			              {res}
			            </div>
			          )
			        }}
  				</Query>

	      </React.Fragment>
      </ApolloProvider>
    );

  }
}

//registerServiceWorker()


export default List


import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  console.log(`TOKEN ${process.env.GITHUB_TOKEN}`);
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      })
    }
  });

  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}
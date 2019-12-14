import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const client = new ApolloClient({
  uri: 'https://petgram-server-thienjs.now.sh/graphql',
});

render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,

  document.getElementById('app')
);

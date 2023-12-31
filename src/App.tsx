import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import NewUser from './new-user';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <NewUser />
      </ApolloProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

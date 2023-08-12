import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type User = {
  user: {
    name: string;
    email: string;
  };
};

const QUERY = gql`
  query GetUser($getUserId: String!) {
    user: getUser(id: $getUserId) {
      name
      email
    }
  }
`;

const QueryVariables = () => {
  const {data, loading, error} = useQuery<User>(QUERY, {
    variables: {
      getUserId: '6b4816ea-7084-40d6-b365-1adc04571509',
    },
  });

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.text}>{error.message}</Text>;
  }

  return (
    <View>
      <Text style={styles.text}>Nombre: {data?.user.name}</Text>
      <Text style={styles.text}>Correo: {data?.user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default QueryVariables;

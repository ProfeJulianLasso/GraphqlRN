import {gql, useMutation} from '@apollo/client';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type NewUser = {
  newUser: {
    id: string;
  };
};

const QUERY = gql`
  mutation CreateUser($user: NewUserDto!) {
    newUser: createUser(user: $user) {
      id
    }
  }
`;

function NewUser() {
  const [newUser, {data, loading, error}] = useMutation<NewUser>(QUERY);

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.text}>{error.message}</Text>;
  }

  const createUser = () => {
    newUser({
      variables: {
        user: {
          email: 'andres.figueroa@gmail.com',
          password: '712635716235',
          name: 'Andres Figueroa',
        },
      },
    });
  };

  return (
    <View>
      <Text style={styles.text}>ID: {data?.newUser.id}</Text>
      <Button title="Crear usuario" onPress={createUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default NewUser;

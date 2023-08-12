import {gql, useQuery} from '@apollo/client';
import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type User = {
  id: string;
  name: string;
};

type Users = {
  users: User[];
};

const QUERY = gql`
  query {
    users: getAllUsers {
      id
      name
    }
  }
`;

const SimpleQuery = (): ReactElement => {
  const {data, loading, error} = useQuery<Users>(QUERY);

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.text}>{error.message}</Text>;
  }

  return (
    <View>
      {data?.users.map(user => (
        <Text style={styles.text} key={user.id}>
          {user.id} - {user.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SimpleQuery;

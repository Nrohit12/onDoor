import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const AuthLoading = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default AuthLoading;

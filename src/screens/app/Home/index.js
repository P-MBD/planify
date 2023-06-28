import React from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
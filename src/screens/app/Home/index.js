import React from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header'
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Home" />
        <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
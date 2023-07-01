import React from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Home" />
        <Text>Home</Text>
        <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
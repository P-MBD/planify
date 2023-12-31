import React from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Home" />
        <ScrollView>
            <Title type="thin">Daily Task</Title>
        </ScrollView>

        <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
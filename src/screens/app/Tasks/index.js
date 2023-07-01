import React from 'react';
import {SafeAreaView, ScrollView,Text} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header'

const Tasks  = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task"/>
        <Text>Tasks </Text>
    </SafeAreaView>
  );
};

export default React.memo(Tasks );
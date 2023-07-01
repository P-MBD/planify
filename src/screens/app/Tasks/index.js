import React from 'react';
import {SafeAreaView, ScrollView,Text} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon';

const Tasks  = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task"/>
         <ScrollView>
              <Text>Tasks </Text>
          </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks );
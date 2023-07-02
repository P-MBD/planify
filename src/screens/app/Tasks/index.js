import React from 'react';
import {SafeAreaView, ScrollView,Text} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import PlusIcon from '../../../components/PlusIcon';

const Tasks  = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task"/>
         <ScrollView>
         <Title type="thin">To Do Tasks</Title>
          </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks );
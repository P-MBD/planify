import React from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import styles from './styles';

const AddTask  = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>AddTask </Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTask );
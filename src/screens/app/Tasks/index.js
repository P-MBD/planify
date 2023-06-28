import React from 'react';
import {SafeAreaView, ScrollView,Text} from 'react-native';
import styles from './styles';

const Tasks  = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Tasks </Text>
    </SafeAreaView>
  );
};

export default React.memo(Tasks );
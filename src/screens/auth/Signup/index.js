import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

const Signup = () => {
  return (
    <View style={styles.container}>
         <Button>Create new account</Button>
    </View>

  );
};

export default React.memo(Signup);
import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

const Signin = () => {
  return (
    <View style={styles.container}>
         <Button>Login</Button>
    </View>

  );
};

export default React.memo(Signin);
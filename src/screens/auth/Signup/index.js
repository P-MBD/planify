import React from 'react';
import { View,SafeAreaView,Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import Title from '../../../components/Title';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Title>Join the  hub</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
       <Button>Create new account</Button>
       <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          {' '}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>

  );
};

export default React.memo(Signup);
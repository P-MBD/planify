import React, {useState} from 'react';
import { View,SafeAreaView,Text, ScrollView} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';

const Signup = () => {
    const [agreed, setAgreed] = useState(false);

    const onCheckboxPress = () => {
      setAgreed(value => !value);
    };

  return (
    <ScrollView style={styles.container}>
        <Title>Join the  hub</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

        <View>
            <Checkbox checked={true} onPress={onCheckboxPress}/>
        </View>

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
    </ScrollView>

  );
};

export default React.memo(Signup);
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";
import { Input, Icon, Button, BottomSheet, ListItem } from "react-native-elements";
import ROUTES from "../constants/routes";

const LoginScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  const [stdCode, setStdCode] = useState('(+1) USA');
  const [phoneNumber, setPhoneNumber] = useState("9876543211");

  const updateStdCodeText = (d) => {
    console.log("Selected : " + d);
    setStdCode(d);
    setIsVisible(false);
  }

  const list = [
    { 
      title: '(+91) India',
      onPress: () => updateStdCodeText('(+91) India'),
    },
    { 
      title: '(+1) USA',
      onPress: () => updateStdCodeText('(+1) USA'),
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <ScreenContainer>
      <View style={styles.subcontainer}>
        <Text>LOGIN</Text>
        <View style={styles.countryCodeView}>
          <Text style={styles.countryCodeViewText}>{stdCode}</Text>
          <Button
            title="Select Country Code"
            onPress={() => setIsVisible(!isVisible)}
          />
        </View>
        <Input
          placeholder='(xxx) xxx xxxx'
          leftIcon={{ type: 'material-icons', name: 'phone' }}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(n) => setPhoneNumber(n)}
        />

        <Button
          title="Login"
        />

        <Text style={styles.registerText}>Don't have an account?</Text>
        <Button
          title="Register"
          type="outline"
          onPress={() => navigation.navigate(ROUTES.Register)}
        />

      </View>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </ScreenContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  subcontainer: {
    width: '100%',
    padding: 50,
  },
  countryCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryCodeViewText: {
    fontSize: 20,
  },
  registerText: {
    marginTop: 20,
  },
})

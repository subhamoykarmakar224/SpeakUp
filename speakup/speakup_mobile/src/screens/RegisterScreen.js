import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";
import { Input, Button } from "react-native-elements";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'



const RegisterScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [stdCode, setStdCode] = useState('(+1) USA');
  const [phoneNumber, setPhoneNumber] = useState("9876543211");
  const [otp, setOtp] = useState("");
  const [otpInputVisibility, setOtpInputVisibility] = useState(false);
  const [btnOtpSendText, setBtnOtpSendText] = useState("Verify OTP");
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const countDownTime = 10;

  const btnRegisterClicked = () => {
    setOtpInputVisibility(true);
    // TODO :: disable Register button

    // TODO :: start timer
    setTimerIsRunning(true);

    // TODO :: Firebase
  };

  const onTimerComplete = () => {
    setBtnOtpSendText('Resend OTP');
  };

  const btnOtpSendTextFunc = () => {
    if(btnOtpSendText == 'Resend OTP') {
      setBtnOtpSendText('Verify OTP');
      // TODO :: Resend SMS for OTP
      alert("Request for OTP resent.");
    } else if(btnOtpSendText == 'Verify OTP') {
      // TODO :: Verify OTP
      alert("Verify OTP.");
    }
  };

  return (
    <ScreenContainer>
      <Button
        icon={{
          type: 'material-icons', name: "chevron-left", size: 20, color: "#1DA1F2"
        }}
        title="Back to Login" type="clear"
        onPress={() => navigation.pop()}
      />
      <View style={styles.subcontainer}>
        <Text>REGISTER</Text>
        <View style={styles.countryCodeView}>
          <Text style={styles.countryCodeViewText}>{stdCode}</Text>
          <Button
            title="Select Country Code"
            onPress={() => setIsVisible(!isVisible)}
            type="outline"
          />
        </View>
        <Input
          placeholder='(xxx) xxx xxxx'
          leftIcon={{ type: 'material-icons', name: 'phone' }}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(n) => setPhoneNumber(n)}
        />

        <Input
          placeholder='Your name...'
          leftIcon={{ type: 'material-icons', name: 'person' }}
          value={name}
          onChangeText={(n) => setName(n)}
        />

        <Button
          title="Register"
          onPress={btnRegisterClicked}
        />
        {otpInputVisibility ?
          <View style={styles.otpView}>
            <Input
              style={styles.otpInput}
              placeholder='******'
              value={otp}
              onChangeText={(n) => setOtp(n)}
            />

            <View>
              <CountdownCircleTimer
                isPlaying={timerIsRunning}
                duration={countDownTime}
                colors={[
                  ['#004777', 0.4],
                  ['#F7B801', 0.4],
                  ['#A30000', 0.2],
                ]}
                onComplete={onTimerComplete}
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text style={{ color: animatedColor, fontSize: 25 }}>
                    {remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>

              <Button
                title={btnOtpSendText}
                onPress={btnOtpSendTextFunc}
              />
            </View>

          </View>
          :
          null
        }

      </View>
    </ScreenContainer>
  )
}

export default RegisterScreen

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
  otpView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    marginTop: 40,
  },
  timerText: {
    fontSize: 30,
    color: '#c1c1c1',


  },
})

import React, { useContext, useState, useRef } from 'react';
import { Keyboard, StyleSheet, Text, View, Animated } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";
import { Input, Button } from "react-native-elements";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import firebaseApp from "../constants/firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";


const RegisterScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  // Firebase
  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebaseApp.apps.length ? firebaseApp.app().options : undefined;

  // Others
  const [name, setName] = useState("");
  const [stdCode, setStdCode] = useState('(+1) USA');
  const [phoneNumber, setPhoneNumber] = useState("9876543211");
  const [isbtnRegisterEnabled, setIsbtnRegisterEnabled] = useState(true);
  const [otp, setOtp] = useState("");
  const [otpInputVisibility, setOtpInputVisibility] = useState(false);
  const [btnOtpSendText, setBtnOtpSendText] = useState("Verify OTP");
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const countDownTime = 90;

  const extractOnlyStdCode = (s) => stdCode.substring(1, stdCode.indexOf(')'));

  // Functions
  const btnRegisterClicked = async () => {
    Keyboard.dismiss();
    setIsbtnRegisterEnabled(false);
    setOtpInputVisibility(true);
    setTimerIsRunning(true);

    // TODO :: Disable the phone number intput

    // TODO :: Firebase
    try {
      const phoneProvider = new firebaseApp.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        extractOnlyStdCode(stdCode).concat(phoneNumber),
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      alert("Verification code has been sent to your phone.");
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const onTimerComplete = () => {
    setBtnOtpSendText('Resend OTP');
  };

  const btnOtpSendTextFunc = async () => {
    if (btnOtpSendText == 'Resend OTP') {
      setBtnOtpSendText('Verify OTP');
      // TODO :: Resend SMS for OTP
      alert("Request for OTP resent.");
    } else if (btnOtpSendText == 'Verify OTP') {
      try {
        const credential = firebaseApp.auth.PhoneAuthProvider.credential(
          verificationId,
          otp
        );
        await firebaseApp.auth().signInWithCredential(credential);
        alert(`Phone authentication successful`);
        signUp(JSON.stringify(verificationId));
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    }
  };

  return (
    <ScreenContainer>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
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
          autoFocus
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
          disabled={!isbtnRegisterEnabled}
        />
        {otpInputVisibility ?
          <View style={styles.otpView}>
            <Input
              style={styles.otpInput}
              placeholder='******'
              value={otp}
              disabled={!verificationId}
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

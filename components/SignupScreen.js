import React from 'react';
import { StyleSheet, Text, View, ImageBackground,
     TextInput, CheckBox, TouchableOpacity } from 'react-native';
import {Share_400Regular, Share_700Bold, useFonts} from '@expo-google-fonts/share';
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {

    let [fontsLoaded, error] = useFonts({
        Share_400Regular,
        Share_700Bold,
      });
    
      return(
        <View style={styles.container}>
        <ImageBackground source={require('./images/bg1.png')} resizeMode="cover" style={styles.imageBg}>
            <Text style={styles.txtTitle}>Create Account</Text>

            <Text style={[styles.txtSub, styles.txtName]}>Name</Text>
            <TextInput style={[styles.inputContainer, {top: 233}]} />

            <Text style={[styles.txtSub, styles.txtEmail]}>Email Address</Text>
            <TextInput style={[styles.inputContainer, {top: 397}]} />

            <Text style={[styles.txtSub, styles.txtPass]}>Password</Text>
            <TextInput style={[styles.inputContainer, {top: 315}]} />
            
            <Text style={styles.txtMessage}>Password must be at least 8 characters.</Text>
        
            <TouchableOpacity style={styles.btnSignup}>
              <Text style={styles.txtBtn}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.txtBot}>Already have an account?</Text>
            <TouchableOpacity style={styles.btnLogin}
              onPress= {() => navigation.navigate('LoginScreen') }>
              <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            
        </ImageBackground>
    </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
  },
  txtTitle: {
    position: 'absolute',
    width: 189,
    height: 84,
    left: 13,
    top: 65,

    fontFamily: 'Share_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 54,
    textAlign: 'center',

    color: '#FFFFFF' 
  },
  txtSub: {
    position: 'absolute',
    width: 95,
    height: 25,

    fontFamily: 'Share_400Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  txtName: {
      left: 12,
      top: 208
  },
  txtEmail: {
      left: 35,
      top: 290
  },
  txtPass: {
      left: 21,
      top: 372
  },
  inputContainer: {
    position: 'absolute',
    width: 337,
    height: 35,
    left: 33,
    padding: 10,

    backgroundColor: '#FFFFFF',
    borderRadius: 13
  },
  txtMessage: {
    position: 'absolute',
    width: 217,
    height: 17,
    left: 35,
    top: 441,

    fontFamily: 'Share_400Regular',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',

    color: '#FFFFFF' 
  },
  btnSignup: {
    position: 'absolute',
    width: 182,
    height: 38,
    left: 109,
    top: 503,

    backgroundColor: '#ffffff',
    borderRadius: 50 
  },
  txtBtn: {
    padding: 8,
    width: 174,
    height: 22,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000'
  },
  txtBot: {
    position: 'absolute',
    width: 157,
    height: 19,
    left: 126,
    top: 551,

    fontFamily: 'Share_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 17,
    textAlign: 'center',

    color: '#FFFFFF'
  },
  txtLogin: {
    position: 'absolute',
    width: 100,
    height: 58,
    left: 20,
    top: 5,

    fontFamily: 'Share_700Bold',
    fontSize: 15,
    lineHeight: 17,
    textAlign: 'center',

    color: '#ffffff'
  },
  btnLogin: {
    position: 'absolute',
    width: 143,
    height: 27,
    left: 130,
    top: 584
  },
});

export default SignupScreen

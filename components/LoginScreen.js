import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,
     TextInput, CheckBox, TouchableOpacity } from 'react-native';
import {Share_400Regular, Share_700Bold, useFonts} from '@expo-google-fonts/share';

const LoginScreen = ({navigation}) => {

  let [fontsLoaded, error] = useFonts({
    Share_400Regular,
    Share_700Bold,
  });
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./images/bg1.png')} resizeMode="cover" style={styles.imageBg}>
            <Text style={styles.txtTitle}>Login</Text>
            <Text style={[styles.txtSub, styles.txtEmail]}>Email Address</Text>
            <TextInput style={
              [styles.inputContainer,{top: 233}]}
              value = {email}
              onChangeText = {text => setEmail(text)}/>

            <Text style={[styles.txtSub, styles.txtPass]}>Password</Text>
            <TextInput style={
              [styles.inputContainer, {top: 315}]}
              value = {password}
              onChangeText={text => setPassword(text)}
              secureTextEntry />

            <TouchableOpacity style={styles.btnLogin}
              onPress={() => {navigation.navigate('DrawerScreen') } }>
              <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.txtBot}>Don't have an account?</Text>
            <TouchableOpacity style={styles.btnSignup}
              onPress= {() => navigation.navigate('SignupScreen') } >
              <Text style={styles.txtSignup}>Sign up</Text>
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
        width: 282,
        height: 170,
        left: -29,
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
        width: 105,
        height: 19,

        fontFamily: 'Share_400Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',

        color: '#FFFFFF'
      },
      txtEmail: {
        left: 39,
        top: 204,  
      },
      txtPass: {
        left: 27,
        top: 286,
      },
      inputContainer: {
        position: 'absolute',
        width: 337,
        height: 35,
        left: 39,
        padding: 10,

        backgroundColor: '#FFFFFF',
        borderRadius: 13
      },
      btnLogin: {
        position: 'absolute',
        width: 213,
        height: 38,
        left: 99,
        top: 419,

        backgroundColor: '#ffffff',
        borderRadius: 50
      },
      txtBtn: {
        padding: 10,
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
        width: 212,
        height: 22,
        left: 100,
        top: 478,

        fontFamily: 'Share_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17,
        textAlign: 'center',

        color: '#FFFFFF'
      },
      txtSignup: {
        position: 'absolute',
        width: 50,
        height: 20,
        left: 0,
        top: 5,

        fontFamily: 'Share_700Bold',
        fontSize: 15,
        lineHeight: 17,
        textAlign: 'center',

        color: '#ffffff'
      },
      btnSignup: {
        position: 'absolute',
        width: 50,
        height: 20,
        left: 180,
        top: 500
      }

});

export default LoginScreen
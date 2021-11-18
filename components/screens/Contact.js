import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {Share_400Regular, Share_700Bold, useFonts} from '@expo-google-fonts/share';

const Contact = () => {
    let [fontsLoaded, error] = useFonts({
        Share_400Regular,
        Share_700Bold,
    });

    return(
    <View style = {styles.container}>
    <ScrollView>
        <Text style = {styles.txtTitle}>CONTACT US</Text>
        
        <Text style = {styles.txtName}>NAME</Text>
        <TextInput style = {styles.inputName} />

        <Text style = {styles.txtEmail}>E-MAIL</Text>
        <TextInput style = {styles.inputEmail} />
      
        <Text
        style = {styles.txt}
        >Message</Text>
        <TextInput style = {styles.input2}
        multiline = {true}
        numberOfLines = {3} />

        <TouchableOpacity
          style={styles.btn}>
            <Text style = {{
              fontFamily: 'Share_400Regular',
              fontSize : 20,
              fontWeight: 'bold'}}>Submit</Text>
        </TouchableOpacity>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8A7B1',
    
  },
  
txtTitle: {
 position: 'absolute',
	width: 213,
	height: 56,
	left: 30,
	top: 30,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 48,
	lineHeight: 56,
	letterSpacing: -0.02,
	color: '#fff'
  },
  
txtName: {
    position: 'absolute',
    width: 80,
    height: 28,
    left: 20,
    top: 120,
    fontFamily: 'Share_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: -0.02,
    color: '#FFFFFF',	
  },
  
txtEmail: {
  position: 'absolute',
	width: 80,
	height: 28,
	left: 20,
	top: 220,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 25,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#FFFFFF',
  
  },
txt: {
    position: 'absolute',
	width: 90,
	height: 28,
	left: 20,
	top: 320,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 25,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#FFFFFF',
  
  },
  
inputName: {
  position: 'absolute',
  top: 150,
  margin: 15,
  width: 380,
  height: 40,
  borderColor: 'black',
  borderWidth: 1,
  padding: 10,
  color: 'black',
  backgroundColor: 'white'
},

inputEmail: {
    position: 'absolute',
    margin: 15,
    top: 250,
    height: 40,
    width: 380,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'black',
    backgroundColor: 'white'
     },
   
input2: {
  position: 'absolute',
  borderColor: 'black',
  borderWidth:1,
  margin:15,
  height: 80,
  padding: 10,
  top: 350,
  width: 380,
  backgroundColor: 'white',
  color: '#000'
   },
   
btn: {
  position: 'absolute',
  alignItems: "center",
  backgroundColor: "#FAE8E0",
  padding: 10,
  borderRadius: 97,
  fontSize: 15,
  margin: 15,
  paddingHorizontal: 90,
  top: 450,
  left: 75,
  
  }
});
export default Contact;
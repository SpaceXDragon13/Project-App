import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Share_400Regular, Share_700Bold, useFonts} from '@expo-google-fonts/share';

const AboutUs = () => {

let [fontsLoaded, error] = useFonts({
	Share_400Regular,
	Share_700Bold,
});

  return (
    <View style = {styles.container}>
		<ImageBackground source={require('../images/bg1.png')} resizeMode="cover" style={styles.imageBg}>
			<Text style = {styles.txtTitle}>OUR TEAM </Text>
			<Text style = {styles.txtSub}>Meet the entire team from BS CS21S1:</Text>
			<Text style = {styles.txtParagraph}>Hello, we are "A Team". And we are here to introduced our
			 program that we made, and we hope you guys having fun!</Text>
			 
			<View style = {styles.box}></View>
			<View style = {styles.box1}></View>
			<View style = {styles.box2}></View>
			<Text style = {styles.txtName}> Delos Reyes, Kate </Text>
			<Text style = {styles.txtName1}> Laurente, Dan </Text>
			<Text style = {styles.txtName2}> Salvaloza, Dustin </Text>

			<TouchableOpacity style={styles.btnNext}
              onPress={() => { } }>
              <Text style={styles.txtBtn}>Next</Text>
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
	height: 740
},
txtTitle: {
	position: 'absolute',
	width: 194,
	height: 123,
	left: 30,
	top: 33,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 50,
	lineHeight: 56,
	letterSpacing: -0.02,
	color: '#FFFFFF'
 
 },
 txtSub: {
	position: 'absolute',
	width: 359,
	height: 28,
	left: 31,
	top: 144,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 23,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#FFFFFF'
 },
 txtParagraph: {
    position: 'absolute',
	width: 353,
	height: 112,
	left: 31,
	top: 184,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 23,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#FFFFFF'

},
  
txtName: {
	position: 'absolute',
	width: 167,
	height: 28,
	left: 157,
	top: 348,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 22,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#1C23D6',
  },
  
txtName1: {
	position: 'absolute',
	width: 131,
	height: 28,
	left: 157,
	top: 481,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 22,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#1C23D6'
},
txtName2: {
  position: 'absolute',
	width: 162,
	height: 28,
	left: 157,
	top: 626,
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: 22,
	lineHeight: 28,
	letterSpacing: -0.02,
	color: '#1C23D6'
  
  },
  box: {
	position: 'absolute',
	width: 120,
	height: 116,
	left: 16,
	top: 308,
	backgroundColor: '#C4C4C4'
  },
  box1: {
	position: 'absolute',
	width: 120,
	height: 116,
	left: 16,
	top: 441,
	backgroundColor: '#C4C4C4'
  },
  box2: {
	position: 'absolute',
	width: 120,
	height: 116,
	left: 16,
	top: 576,
	backgroundColor: '#C4C4C4'
  },
  txtBtn: {
	position: 'absolute',
	fontFamily: 'Share_400Regular',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontSize: 20,
	lineHeight: 40,
	letterSpacing: -0.02,
	display: 'flex',
	alignItems: 'center',
	textAlign: 'center',
	color: '#7878AB'
  },
  btnNext: {
	position: 'absolute',
	width: 5,
	height: 5,
	right: 60,
	bottom: -20,
	color: '#fff'
  }
  
});

export default AboutUs
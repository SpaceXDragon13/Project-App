import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './components/RootStackScreen';
import DrawerScreen from './components/DrawerScreen';
import firebase from 'firebase/app';
import "firebase/auth";
import { initializeApp } from 'firebase/app';

function App () {

const [isLoggedIn, setIsLoggedIn] = useState(false);

const firebaseConfig = {
  apiKey: "AIzaSyBLyiPexkNRavTK9wJT-XX_Gb8JypIWGkI",
  authDomain: "project-app-c6654.firebaseapp.com",
  projectId: "project-app-c6654",
  storageBucket: "project-app-c6654.appspot.com",
  messagingSenderId: "293936567497",
  appId: "1:293936567497:web:ad0201724140482e84a918"
};

const app = initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
       <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer> 
        {/*<DrawerScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from "./screens/Home";
import CategoryScreen from "./screens/Categories";
import CartScreen from "./screens/Cart";
import AboutUsScreen from "./screens/AboutUs";
import ContactScreen from "./screens/Contact";

function Home({navigation}) {
	return <Home />;
}

function Categories({navigation}) {
	return <Categories />;
}

function Cart({navigation}) {
	return <Cart />;
}

function AboutUs({navigation}) {
	return <AboutUs />;
}

function Contact({navigation}) {
	return <Contact />;
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
	return (
		<NavigationContainer independent={true}>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Categories" component={CategoryScreen} />
                <Drawer.Screen name="Cart" component={CartScreen} />
                <Drawer.Screen name="About Us" component={AboutUsScreen} />
                <Drawer.Screen name="Contact" component={ContactScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet,
ScrollView} from 'react-native';

export default class ProductDetails extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.prodFrame}>
                    <Image
                    source={this.props.src}
                    style={styles.img}
                    />
                </View>
                
                <View style={styles.prodDetails}>
                    <Text style={styles.txtName}>
                        {this.props.name}
                    </Text>

                    <Text style={styles.txtPrice}>
                        {this.props.price}
                    </Text>
                
                    <Text style={styles.txtDesc}>
                        {this.props.desc} 
                    </Text>
                </View>

            </View>
            
                

                    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
    },
    prodFrame: {
        position: 'absolute',
        width: 349,
        height: 250,
        left: 31,
        top: -20,
        backgroundColor: '#FFA384',
        borderRadius: 20
    },

    prodDetails: {
        position: 'absolute',
        width: 335,
        height: 150,
        left: 39,
        top: 250,
        backgroundColor: '#EFE7BC',
        borderRadius: 20
    },

    img: {
        width: 200,
        height: 200,
        marginTop: 15,
        marginHorizontal: 60,
        resizeMode: 'cover',
        backgroundColor: '#FFA384',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtName: {
        position: 'absolute',
        width: 300,
        height: 50,
        left: 10,
        top: 10,
        fontFamily: 'Share',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 28
    },
    
    txtPrice: {
        position: 'absolute',
        left: 20,
        top: 45,
        fontFamily: 'Share',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20,
        color: '#145DA0'

    },
    txtDesc: {
        position: 'absolute',
        left: 10,
        top: 70,
        fontFamily: 'Share',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
    }, 
    
});

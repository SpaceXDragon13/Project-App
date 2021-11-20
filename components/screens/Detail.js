import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { FontAwesome5} from '@expo/vector-icons';
import ProductDetail from '../common/ProductDetail';



const Detail = ({navigation}) => {

    var id = 1;

    setId = (id) => {
        if(id === 1) {
            <ProductDetail 
                src={require('../images/Intel1.png')}
                name="Intel Core i7-10700KA"
                desc="Compatible with Intel 400 series chipset based motherboards"
                price="₱20,500.00"
            />
        }
      }
        
    
    return(
        <View style={styles.container}>
            <View style={styles.btn}>
            <TouchableOpacity onPress= {() => navigation.goBack('Home') }>
            <FontAwesome5 name="arrow-circle-left" 
                      size={25} 
                      style = {styles.iconBack} />
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Cart') }>
            <FontAwesome5 name="shopping-basket" 
                    size={25} 
                    style = {styles.iconCart} />
            </TouchableOpacity>
            </View>

            {setId(1)}

                    
            <TouchableOpacity 
                onPress= {() => navigation.navigate('Cart') }
                style={styles.btnAddToCart}>
                    <Text style={styles.txtBbtn}>
                        Add to Cart
                    </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFF",
    },
    alignment: {
        flexDirection:"row",
        width:"100%",
        marginTop:40
    },
    iconBack: { 
        position: 'absolute',
        top: 10,
        left: 10,
    },
    iconCart: {
        position: 'absolute',
        top: 10,
        right: 10,
    }, 
      
    btn: {
        position: 'relative',
        width: 411,
        height: 100
    },

    btnAddToCart: {
        position: 'absolute',
        width: 230,
        height: 54,
        left: 80,
        top: 650,
        backgroundColor: '#000',
        borderRadius: 10,
    },

    txtBbtn: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default Detail

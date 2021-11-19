import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Products extends React.Component{
    render(){
        return(

            <TouchableOpacity
             onPress={this.props.onPress}
             style={styles.frames}
            >
                <Image
                source={this.props.src}
                style={styles.img}
                />
                <View style={styles.alignment}>
                    <Text style={styles.txtName}>
                        {this.props.name}
                    </Text>
                <View style={styles.Dot} />
                 <Text style={styles.txtNew}> New </Text>
               
                </View>
                <Text style={styles.txtDesc}>
                        {this.props.desc} 
                 </Text>

                 <View style={styles.alignment2}>
                     <View style={{width:"80%"}}>
                         <Text style={{fontSize:15, fontFamily:"Bold"}}>
                            {this.props.price}
                         </Text>
                     </View>
                 </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    frames: {
        top: 10,
        backgroundColor:"#FFF",
        height:240,
        width:200,
        borderRadius:10,
        padding:15,
        marginRight:15,
        marginLeft:2,
        marginBottom:-10,
    },
    img: {
        width:170,
        height:110,
        borderRadius:10
    },
    alignment: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:10    
    },
    txtName: {
        fontFamily:"Bold",
        color:"#4f4a4a",
        fontSize:12    
    },
    Dot: {
        height:4,
        width:4,
        borderRadius:4,
        backgroundColor:"red",
        marginHorizontal:4    
    },
    txtNew: {
        color:"red",
        fontSize:9,
        fontFamily:"Bold"
    },
    txtDesc: {
        fontSize:9,
        color:"#4f4a4a",
        fontFamily:"Regular"
    },
    alignment2: {
        flexDirection:"row",
        marginTop:5,
        alignItems:"center",
        width:"100%"    
    }
});

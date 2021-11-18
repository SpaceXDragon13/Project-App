import React from 'react';
import { StyleSheet, Text, View, Image, Icon,
ScrollView, TextInput } from 'react-native';
import Product from '../common/Product';

const Home = () => {
    return(
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                //backgroundColor:"#fff",
                paddingHorizontal:10
            }}
            >   
                <TextInput style={styles.inputSearch}
                    placeholder="Find your Favorite Items?"
                />            

                <Text style={styles.txtSub}>Shop for</Text>
                <View style={{marginTop: 120}}>
                
                <Text style={styles.txtSubTitle}>Processor</Text>
                <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                        <Product 
                            src={require('../images/Intel1.png')}
                            name="Intel Core i7-10700KA"
                            desc="Compatible with Intel 400 series chipset based motherboards"
                            price="₱20,500.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/Intel2.jpg')}
                            name="Intel Core i5-11600K"
                            desc="Motherboard compatibility	400 and 500 series(2)"
                            price="₱16,700.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                        <Product 
                            src={require('../images/Intel3.jpg')}
                            name="Intel Core i5-9400"
                            desc="Good For Mid Range"
                            price="₱8,500.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                        <Product 
                            src={require('../images/Intel4.jpg')}
                            name="Intel Core i7-11700k"
                            desc="Intel Turbo Boost Technology 3.0"
                            price="₱25,000.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                </ScrollView>

                <Text style={[styles.txtSubTitle, {marginTop: 50}]}>Motherboard</Text>
                <ScrollView
                    horizontal
                     showsHorizontalScrollIndicator={false}>
                        <Product 
                            src={require('../images/msi1.jpg')}
                            name="MSI MPG Z590 GAMING"
                            desc="Supports DDR4 Memory, up to 5333(OC) MHz"
                            price="₱17,800.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                        <Product 
                            src={require('../images/msi2.jpg')}
                            name="MSI MAG B550M"
                            desc="Supports DDR4 Memory, up to 5333(OC) MHz"
                            price="₱17,800.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                        <Product 
                            src={require('../images/msi4.jpg')}
                            name="GIGABYTE X570 GAMING X AMD X570"
                            desc="Advanced Thermal Design with Fins-Array Heatsink and Direct Touch Heatpipe"
                            price="₱8,950.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                        <Product 
                            src={require('../images/msi3.jpg')}
                            name="GIGABYTE X570 AORUS ULTRA AMD X570G"
                            desc="12+2 Phases IR Digital VRM Solution with Power Stage"
                            price="₱16,950.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                        />
                    </ScrollView>

                    <Text style={[styles.txtSubTitle, {marginTop: 50}]}>Memory</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Product 
                            src={require('../images/ram1.jpg')}
                            name="G.SKILL TRIDENT Z RGB 32GB"
                            desc="The Ultimate DDR4 Just Got Better!"
                            price="₱9,850.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/ram2.jpg')}
                            name="Corsair VENGEANCE RGB PRO SL 16GB"
                            desc="CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting"
                            price="₱7,200.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/ram3.jpg')}
                            name="Tforce Delta Tuf 16GB"
                            desc="Delta Tuf"
                            price="₱5,250.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/ram4.jpg')}
                            name="KINGSTON 16GB 2666MHZ FURY"
                            desc="HyperX HX426C16FB/16 is a 2G x 64-bit (16GB) DDR4-2666 CL16"
                            price="₱3,600.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                    </ScrollView>

                    <Text style={[styles.txtSubTitle, {marginTop: 50}]}>Internal Storage</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Product 
                            src={require('../images/Internal1.png')}
                            name="Seagate FireCuda 530 2TB M."
                            desc="Performance nothing short of exhilarating, the FireCuda® 530 redefines speed!"
                            price="₱26,650.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/Internal2.png')}
                            name="Adata 2TB XPG SX8200 Pro PCIE "
                            desc="The Ultimate Internal Got Better"
                            price="₱15,600.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/Internal3.png')}
                            name="Western Digital 250GB SN750 NVME"
                            desc="Top tier performance for gaming and Hardcore enthusiasts!"
                            price="₱4,550.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        {/*<Product 
                            src={require('../images/Internal4.jpg')}
                            name="INTEL 512GB 660P M.2 PCIE"
                            desc="The Ultimate SSD6 Just Got Better!"
                            price="₱3,450.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            /> */}
                    </ScrollView>

                    <Text style={[styles.txtSubTitle, {marginTop: 50}]}>Graphics Card</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Product 
                            src={require('../images/GC1.jpg')}
                            name="Gigabyte GeForce GTX 1050 Ti OC 4G GDDR5 "
                            desc="Boost: 1455MHz/ Base: 1341MHz in OC Mode"
                            price="₱13,100.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/GC2.png')}
                            name="GIGABYTE GeForce GTX 1660 SUPER MINI"
                            desc="NVIDIA Turing™ architecture and GeForce Experience™"
                            price="₱27,000.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/GC3.jpg')}
                            name="GIGABYTE GeForce RTX 3060 Ti EAGLE"
                            desc="NVIDIA Ampere Streaming Multiprocessors
                            2nd Generation RT Cores"
                            price="₱41,950.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                        <Product 
                            src={require('../images/GC4.jpg')}
                            name="Palit GeForce GT 1030"
                            desc="The new NVIDIA GeForce® GT 1030, powered by the award-winning NVIDIA Pascal™ architecture, accelerates your entire PC experience."
                            price="₱5,000.00"
                            onPress={() => this.props.navigation.navigate('Detail')}
                            />
                    </ScrollView>
                    
                       </View>
            </ScrollView>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a9957b',
        paddingBottom: 50
    },
    inputSearch: {
        position: 'absolute',
        width: 365,
        height: 49,
        top: 25,
        backgroundColor: '#fff',
        padding: 10,
        textAlign: 'center'
    },
    txtSub: {
        position: 'absolute',
        width: 90,
        height: 23,
        left: 10,
        top: 85,
        fontSize: 20
    },
    txtSubTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },

});

export default Home;
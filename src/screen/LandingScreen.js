import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from 'native-base'
import MyCarousel from '../components/snapCarousel'


const LandingScreen = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text1}>January 2018</Text>
            </View>
            <View style={styles.header2}>
                <Text style={{fontSize:36}}>Dashboard</Text>
            </View>
            {/* <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card style={styles.Card1}>
                    <Text style={styles.cardText1}>Expense</Text>
                    <Text style={styles.cardText2}>20.500.000</Text>
                </Card>
                <Card style={styles.Card2}>
                    <Text style={styles.cardText1}> Income </Text>
                    <Text style={styles.cardText2}> 0 </Text>
                </Card>
            </ScrollView> */}
            <View key='bottomview'>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>TODAY</Text>
                        <View style={styles.currencyView}>
                            <Text style={{fontSize:32, color:'#8E8E93'}}>0</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>SAT</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#D44624'}}>-</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>300.000</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>FRI</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#D44624'}}>-</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>2.000.000</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>THU</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#75D424'}}>+</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>5.000.000</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>WED</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#D44624'}}>-</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>500.000</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>TUE</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#D44624'}}>-</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>500.000</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardBottom}>
                    <View style={styles.viewBottom}>
                        <Text>MON</Text>
                        <View style={styles.currencyView}>
                            <Text style={{marginLeft: 3, marginRight: 3, color:'#D44624'}}>-</Text>
                            <Text style={{marginLeft: 3, marginRight: 3}}>Rp</Text>
                            <Text style={{fontSize:32}}>500.000</Text>
                        </View>
                    </View>
                </Card>

            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    container:{
        paddingLeft: 20,
    },
    
    header:{
        marginTop: 46,
    },
    header2:{
    },


    Card1:{
        height: 80,
        width: 335,
        backgroundColor:"#D44624",
        borderRadius: 4,
        borderBottomWidth: null,
        
    },
    cardText1:{
        color: 'white',
        fontSize: 13,
        paddingLeft: 20,
        paddingTop: 14,
    },

    cardText2:{
        color:'white',
        paddingLeft: 140,
        paddingBottom: 6,
        fontSize: 34,
    },

    Card2:{
        height: 80,
        width: 335,
        backgroundColor:"#75D424",
        borderRadius: 4,
    },

    viewBottom:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft:16,
        paddingRight: 15.8,
        
    },

    currencyView:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    cardBottom:{
        height: 64,
        backgroundColor:"#FFFFFF",
        borderRadius: 4,

    }
});

export default LandingScreen;
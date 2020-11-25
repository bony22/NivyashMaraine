import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, ScrollView, StatusBar, Pressable } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Tab, Tabs, TabHeading } from 'native-base';
//  import BookingHistory from '../BookingHistory/BookingHistory';
import WorkPlan from './WorkPlan';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Clinic from '../Clinic/Clinic';
// import PaymentDetails from '../PaymentDetails/PaymentDetails';
// import TestDetails from '../TestDetails/TestDetails';



const { height, width } = Dimensions.get('window');


export default class PaymentHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chatinfo: this.props.navigation.getParam('chatdata',{}),
        };

        // console.log('chatinfo',this.props.navigation.getParam('chatdata',{}))
    }

    render() {
        return (

            <View >

                <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />

                <View style={styles.Upper}>
                    {/* <Pressable onPress={() => this.props.navigation.navigate('OtherDetails')}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                            <Icon name="ios-arrow-back" type='Ionicons'
                                style={{ color: "#ffffff", fontSize: 25, }} />
                        </View>
                    </Pressable> */}
                    <View style={{ width: '60%', marginTop: 18, }}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>All Tabs</Text>
                    </View>

                </View>

               
                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity

                        style={{
                            height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                           // backgroundColor: colors.HeaderColor
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>tab1</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('OrderAddress')}

                        style={{
                            height: 50, width: '50%', alignItems: 'center', justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                            borderWidth: 1,
                            //backgroundColor: colors.HeaderColor
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>Order</Text>

                    </TouchableOpacity>


                </View>

                   
               


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, width: '100%' }}>



                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('WorkPlan')}


                        style={{
                            width: '50%', alignItems: 'center', justifyContent: 'center', height: 45,
                            borderRadius: 7, marginTop: 20,

                            backgroundColor: 'blue',
                            elevation: 2
                        }}>

                        <Text style={{ color: 'white' }}>Tab1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Yard')}


                        style={{
                            width: '50%', alignItems: 'center', justifyContent: 'center', height: 45,
                            borderRadius: 7, marginTop: 20,

                            backgroundColor: 'blue',
                            elevation: 2
                        }}>

                        <Text style={{ color: 'white' }}>Tab2</Text>
                    </TouchableOpacity>

                </View>






            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    Upper: {
        backgroundColor: '#147BDF',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        elevation: 3
        // marginHorizontal: 15,
        // marginTop: 15,

        // marginVertical:5
    },
})

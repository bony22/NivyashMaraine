import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker } from 'native-base';
const { height, width } = Dimensions.get("window")
export default class WorkPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {

            picker_value: [
                { value: 'PM' },
                { value: 'TM' },

            ]
        };
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white', }}>


                <ScrollView style={{ width: '100%' }}>
                    <View style={{
                        width: '100%', backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{ height: 70, width: width - 20, marginTop: 20, alignSelf: 'center' }}>


                            <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10 }}>


                                <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, marginLeft: 3 }}>Date</Text>
                                <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, marginLeft: 30 }}>21/11/2020</Text>



                            </View>




                        </View>

                        <View style={{
                            height: 50, width: '98%', alignItems: 'center', flexDirection: "row",
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                        }}>
                            <Text style={styles.unselectstyle}>
                                Name of HSE MANAGER

                                </Text>



                            <View style={{
                                height: 50, width: '40%', justifyContent: 'center',
                                marginBottom: 13,
                                // marginRight: 15,
                                //  justifyContent: 'flex-start',
                                alignItems: 'center',
                                // backgroundColor: '#1273DE',
                                // marginLeft:20
                                borderWidth: 1,
                                borderColor: 'grey', borderRadius: 15
                            }}>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Type Of users"
                                    textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                                    style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                                    // selectedValue={this.state.selected}
                                    // onValueChange={this.onValueChange.bind(this)}
                                    onValueChange={(value) => this.setState({ type: value })}
                                    selectedValue={this.state.type}
                                >




                                    {
                                        this.state.picker_value.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.value} value={item.value} key={index} />
                                            )
                                        })
                                    }



                                </Picker>

                            </View>
                        </View>


                        <View style={{
                            height: 50, width: '98%', alignItems: 'center', flexDirection: "row", marginTop: 10,
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                        }}>
                            <Text style={styles.unselectstyle}>
                                Name of Site Supdt


                                </Text>



                            <View style={{
                                height: 50, width: '40%', justifyContent: 'center',
                                marginBottom: 13,
                                // marginRight: 15,
                                //  justifyContent: 'flex-start',
                                alignItems: 'center',
                                // backgroundColor: '#1273DE',
                                // marginLeft:20
                                borderWidth: 1,
                                borderColor: 'grey', borderRadius: 15
                            }}>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Type Of users"
                                    textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                                    style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                                    // selectedValue={this.state.selected}
                                    // onValueChange={this.onValueChange.bind(this)}
                                    onValueChange={(value) => this.setState({ type: value })}
                                    selectedValue={this.state.type}
                                >




                                    {
                                        this.state.picker_value.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.value} value={item.value} key={index} />
                                            )
                                        })
                                    }



                                </Picker>

                            </View>
                        </View>




                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10, width: width - 20, marginTop: 20, alignSelf: 'center' }}>


                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, marginLeft: 3 }}>
                                Office review- Work planning for the day
                                </Text>


                        </View>




                        {/* <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10, width: width - 20, marginTop: 20, alignSelf: 'center' }}>


                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, marginLeft: 3, fontWeight: 'bold' }}>
                                Yard
                            </Text>



                        </View> */}

                        {/* <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>


                        <View  style={{  justifyContent: 'center',alignItems:'center', marginTop: 10, width: width/2, alignSelf: 'center' }}>

                        <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18,  fontWeight: 'bold' }}>
                        Yes/No/Na
                        </Text>


                        </View>

                        <View  style={{  justifyContent: 'flex-end',alignItems:'center', marginTop: 10, width: width/2,  alignSelf: 'center' }}>

                        <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                        RA/JHA Prepared- HKC 3.3.3

                        </Text>


                        </View>

                      

                        </View> */}

                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>

                            <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>


                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 80, alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                        Yard
                            </Text>
                                </View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 80, alignSelf: 'center' }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, }}>
                                        Hot work

                                    </Text>


                                </View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 80, alignSelf: 'center' }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, }}>
                                        Lifting-shifting




                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 80, alignSelf: 'center' }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, }}>
                                        IHM material disposal




                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 80, alignSelf: 'center' }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, }}>
                                        Loading-unloading



                                    </Text>


                                </View>



                            </View>

                            <ScrollView
                                horizontal={true}

                            >
                                <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{  borderWidth: 1, flexDirection: 'row' }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                Yes/No/Na
                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                Yes/No/Na
                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                Yes/No/Na
                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 10,  alignSelf: 'center' }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 18, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>


                                        </View>









                                    </View>



                                </View>
                            </ScrollView>


                        </View>




























                    </View>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    upperstyle: {
        height: 140,
        width: width - 90,
        // backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center'

    },
    headerstyle: {
        height: 150,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center'


    },
    showtextstyle: {
        fontFamily: 'Changa-Bold',

        // color:'white',
        fontSize: 40

    },
    passwordContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        // borderColor:this.state.enteredText.length == 0 ? 'white' : '#1a237e',
        borderColor: '#1a237e',
        // paddingBottom: 10,
        height: 60,
        borderRadius: 30,
        marginTop: 5,
        alignItems: "center"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    },
    backgroundview: {
        flex: 1,
        width: width

    },
    selectstyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#45be92',

        textDecorationLine: 'underline'

    },
    unselectstyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginLeft: 10



    },

})

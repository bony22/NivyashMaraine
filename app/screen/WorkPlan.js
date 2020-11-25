import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import MyPicker from '../Component/MyPicker';


const { height, width } = Dimensions.get("window")
export default class WorkPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {

            picker_value: [
                { value: 'PM' },
                { value: 'TM' },

            ],
            picker_value1: [
                { value: 'N/A' },
                { value: 'YES' },
                { value: 'NO' },

            ]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.Upper}>
                    <Pressable onPress={() => this.props.navigation.navigate('NewTab')}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                            <Icon name="ios-arrow-back" type='Ionicons'
                                style={{ color: "#ffffff", fontSize: 25, }} />
                        </View>
                    </Pressable>
                    <View style={{ width: '60%', marginTop: 18, }}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Work Plan</Text>
                    </View>

                </View>


                <ScrollView style={{ width: '100%' }}>
                    <View style={{
                        width: '100%', backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                        <View style={{ height: 30, width: width - 20, marginTop: 20, alignSelf: 'center' }}>


                            <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10 }}>

                                <Text style={{ fontFamily: 'Changa-Medium', fontSize: 14, marginLeft: 3 }}>Date : </Text>
                                <Text style={{ fontFamily: 'Changa-Medium', fontSize: 14, marginLeft: 30 }}>{moment().format("MMM Do YY")}</Text>

                            </View>




                        </View>

                        <View style={{

                            height: 60, width: '98%', alignItems: 'center', flexDirection: "row",
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                        }}
                        >
                            <Text style={styles.unselectstyle}>
                                Name of HSE MANAGER

                            </Text>

                            <TextInput

                                style={{
                                    marginBottom: 20, color: 'black', width: '40%',
                                    borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 13
                                }}

                                placeholder='HSE Manager'
                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                keyboardType='email-address'
                                onChangeText={(value) => this.setState({ email: value })}
                                value={this.state.email}
                            />

                        </View>


                        <View style={{
                            height: 60, width: '98%', alignItems: 'center', flexDirection: "row", marginTop: 10,
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                        }}>
                            <Text style={styles.unselectstyle}>
                                Name of Site Supdt
                            </Text>

                            <TextInput

                                style={{
                                    marginBottom: 20, color: 'black', width: '40%',
                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                }}

                                placeholder='Site Supdt'
                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                keyboardType='email-address'
                                onChangeText={(value) => this.setState({ email: value })}
                                value={this.state.email}

                            />



                        </View>




                        <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10, width: width - 20, marginTop: 20, alignSelf: 'center' }}>


                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginLeft: 3 }}>
                                Office review- Work planning for the day
                                </Text>




                        </View>


                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#147BDF' }}>
                                Yard
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



                                <View style={{ height: 135 }}></View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                                        Hot work

                                    </Text>


                                </View>




                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Lifting-shifting




                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        IHM material disposal




                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Loading-unloading



                                    </Text>


                                </View>



                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                                                Yes/No/Na
                                            </Text>

                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={3}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>




                                        </View>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center',
                                            width: 100
                                        }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Permit made

                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Subject covered in tool box briefing


                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Photos

                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Remarks


                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Yard Actions


                                            </Text>
                                        </View>
                                    </View>

                                    {/* picker box gulo for hot work */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                                        <MyPicker />

                                    </View>


                                    {/* LIFT ND SHIFT PICKER */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />


                                    </View>

                                    {/* ihm er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>

                                    {/* loading er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>


                                </View>



                            </ScrollView>



                        </View>


                        {/* Vessel start */}



                        <View style={{ justifyContent: 'flex-start', width: '90%', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#147BDF' }}>Vessel</Text>

                        </View>



                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



                            <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                                <View style={{ height: 135 }}></View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                                        Hot work

        </Text>


                                </View>




                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Critical lifting





        </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Work in enclosed space





        </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Work aloft




        </Text>


                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Oil Removal





</Text>


                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Work aloft




</Text>


                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        IHM removal




</Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Electrical work





</Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        IHM material disposal




</Text>


                                </View>





                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                                                Yes/No/Na
                </Text>

                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={3}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                </Text>




                                        </View>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center',
                                            width: 100
                                        }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Permit made

                </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Subject covered in tool box briefing


                </Text>


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Photos

                </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Remarks


                </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Yard Actions


                </Text>
                                        </View>
                                    </View>

                                    {/* picker box gulo for hot work */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                                        <MyPicker />

                                    </View>


                                    {/* LIFT ND Critical lifting */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />


                                    </View>

                                    {/* Work in enclosed space er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>

                                    {/* Work aloft er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                                        <MyPicker />

                                    </View>


                                    {/* Oil Removal PICKER */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />


                                    </View>

                                    {/* IHM removal er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>


                                    {/* Electrical work er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>


                                    {/* IHM material disposal er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>



                                </View>



                            </ScrollView>



                        </View>
                        {/* interidal start */}

                        <View style={{ justifyContent: 'flex-start', width: '90%', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#147BDF' }}>Intertidal</Text>

                        </View>



                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



                            <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                                <View style={{ height: 135 }}></View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Blocks falling


                                    </Text>


                                </View>




                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Plate Cutting





                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                                        Crane Lifting-Shifting





                                    </Text>


                                </View>
                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                                                Yes/No/Na
                                            </Text>

                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={3}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                RA/JHA Prepared- HKC 3.3.3

                                            </Text>




                                        </View>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center',
                                            width: 100
                                        }}>

                                            <Text numberOfLines={2}
                                                style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Permit made

                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Subject covered in tool box briefing


                                            </Text>


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Photos

                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Remarks


                                            </Text>



                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                                            <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                                                Yard Actions


                                            </Text>
                                        </View>
                                    </View>

                                    {/* picker box gulo for hot work */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                                        <MyPicker />

                                    </View>


                                    {/* LIFT ND SHIFT PICKER */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />


                                    </View>

                                    {/* ihm er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                                        <MyPicker />

                                    </View>



                                </View>



                            </ScrollView>



                        </View>











                    </View>


                    <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity

                            style={{
                                height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                                //   borderRadius:9,
                                elevation: 5,
                                backgroundColor: '#147BDF'
                            }}>

                            <Text style={{

                                fontSize: 15,
                                color: 'white',
                                textAlign: 'center'
                            }}>SUBMIT</Text>

                        </TouchableOpacity>
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
        fontSize: 13,
        color: 'black',
        marginLeft: 10



    },

    chooseButton: {
        borderBottomWidth: 1,
        backgroundColor: '#D6DBDF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        marginTop: 10,
        marginLeft: 5
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

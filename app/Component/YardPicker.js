import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';


const { height, width } = Dimensions.get("window")


export default class YardPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picker_value: [
                { value: 'PM' },
                { value: 'TM' },

            ],
            picker_value1: [
                { value: '4-5' },
                { value: '3-4' },
                { value: '2-3' },
                { value: '1-2' },
                { value: '0' },
        
              ]
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                <View style={{
                        height: 35, width: 80, justifyContent: 'center',
                        //  marginBottom: 13,
                        // marginRight: 15,
                        //  justifyContent: 'flex-start',
                        alignItems: 'center',
                        // backgroundColor: '#1273DE',
                        // marginLeft: 20,
                        borderWidth: 1,
                        borderColor: 'grey',



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
                                this.state.picker_value1.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.value} value={item.value} key={index} />
                                    )
                                })
                            }



                        </Picker>


                    </View>

                </View>



                

                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                    <View style={{ height: 50, width: '100%', flexDirection: 'row', }}>

                        <View style={{ width: '70%', marginLeft: 10 }}>
                            <Button
                                //onPress={() => this.imageHandler()}
                                style={styles.chooseButton}
                            >
                                <Text style={{ color: '#000' }}>Choose File</Text>
                            </Button>
                        </View>
                    </View>




                </View>

                <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                    {/* <TextInput
                        placeholder='remarks'

                        multiline={true}>

                    </TextInput> */}

                    <TextInput

                        style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}

                    />


                </View>

                <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                    <TextInput

                        style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Yard Actions'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        // onChangeText={(value) => this.setState({ email: value })}
                        // value={this.state.email}

                    />

                </View>
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

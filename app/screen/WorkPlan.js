import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import MyPicker from '../Component/MyPicker';
import Auth from '../service/Auth';
import WorkColName from '../Component/WorkColName';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';


const { height, width } = Dimensions.get("window")
export default class WorkPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resourcePath: '',

            status: false,
            hse: '',
            site: '',
            yesno: '',
            rajha: '',
            permit: '',
            subtool: '',
            remark: '',
            action: '',
            resourcePath: '',

            yesno1: '',
            rajha1: '',
            permit1: '',
            subtool1: '',
            remark1: '',
            action1: '',
            resourcePath1: '',


            yesno2: '',
            rajha2: '',
            permit2: '',
            subtool2: '',
            remark2: '',
            action2: '',
            resourcePath2: '',

            yesno3: '',
            rajha3: '',
            permit3: '',
            subtool3: '',
            remark3: '',
            action3: '',
            resourcePath3: '',

            yesno11: '',
            rajha11: '',
            permit11: '',
            subtool11: '',
            remark11: '',
            action11: '',
            resourcePath11: '',

            yesno12: '',
            rajha12: '',
            permit21: '',
            subtool12: '',
            remark12: '',
            action12: '',
            resourcePath12: '',

            yesno21: '',
            rajha21: '',
            permit21: '',
            subtool21: '',
            remark21: '',
            action21: '',
            resourcePath21: '',


            yesno31: '',
            rajha31: '',
            permit31: '',
            subtool31: '',
            remark31: '',
            action31: '',
            resourcePath31: '',

            yesno41: '',
            rajha41: '',
            permit41: '',
            subtool41: '',
            remark41: '',
            action41: '',
            resourcePath41: '',

            yesno51: '',
            rajha51: '',
            permit51: '',
            subtool51: '',
            remark51: '',
            action51: '',
            resourcePath51: '',

            yesno61: '',
            rajha61: '',
            permit61: '',
            subtool61: '',
            remark61: '',
            action61: '',
            resourcePath61: '',

            yesno71: '',
            rajha71: '',
            permit71: '',
            subtool71: '',
            remark71: '',
            action71: '',
            resourcePath71: '',

            yesno81: '',
            rajha81: '',
            permit81: '',
            subtool81: '',
            remark81: '',
            action81: '',
            resourcePath81: '',

            yesno91: '',
            rajha91: '',
            permit91: '',
            subtool91: '',
            remark91: '',
            action91: '',
            resourcePath91: '',

            yesno101: '',
            rajha101: '',
            permit101: '',
            subtool101: '',
            remark101: '',
            action101: '',
            resourcePath101: '',


            updatedwork: {},


            workplan1: {},


            picker_value1: [
                { value: 'Select' },
                { value: 'N/A' },
                { value: 'YES' },
                { value: 'NO' },

            ],
            allwork: {}
        };
    }


    async componentDidMount() {

        var useremail = await Auth.getWorkPlan();
        // let date = moment().format("DD/MM/YY")
        //  var userpwd = await Auth.getPassWord();
        // this.setstate({
        //     allwork:useremail,
        //     // yesno:allwork.

        // })

        this.setState({
            updatedwork: useremail

        })

        console.log('eeeeeee', this.state.updatedwork)
        //   console.log('usernameeeeeeeeee', this.state.user)


    }
    workplan = async () => {
        setTimeout(() => {
            this.callWork()
        }, 500);
    }



    callWork = async () => {


        this.setState({



            workplan1: {
                status: true,

                yard: {

                    hse: this.state.hse,

                    site: this.state.site,
                    hotwork: {
                        yesno: this.state.yesno,
                        rajha: this.state.rajha,
                        permit: this.state.permit,
                        subtool: this.state.subtool,
                        remark: this.state.remark,
                        action: this.state.action,
                        resourcePath: this.state.resourcePath

                    },
                    lift: {

                        yesno1: this.state.yesno1,
                        rajha1: this.state.rajha1,
                        permit1: this.state.permit1,
                        subtool1: this.state.subtool1,
                        remark1: this.state.remark1,
                        action1: this.state.action1,
                        resourcePath1: this.state.resourcePath1

                    },
                    ihm: {

                        yesno2: this.state.yesno2,
                        rajha2: this.state.rajha2,
                        permit2: this.state.permit2,
                        subtool2: this.state.subtool2,
                        remark2: this.state.remark2,
                        action2: this.state.action2,
                        resourcePath2: this.state.resourcePath2
                    },

                    load: {

                        yesno3: this.state.yesno3,
                        rajha3: this.state.rajha3,
                        permit3: this.state.permit3,
                        subtool3: this.state.subtool3,
                        remark3: this.state.remark3,
                        action3: this.state.action3,
                        resourcePath3: this.state.resourcePath3
                    }
                },



                vessel: {


                    hotwork: {
                        yesno11: this.state.yesno11,
                        rajha11: this.state.rajha11,
                        permit11: this.state.permit11,
                        subtool11: this.state.subtool11,
                        remark11: this.state.remark11,
                        action11: this.state.action11,
                        resourcePath11: this.state.resourcePath11

                    },
                    critical: {

                        yesno12: this.state.yesno12,
                        rajha12: this.state.rajha12,
                        permit12: this.state.permit12,
                        subtool12: this.state.subtool12,
                        remark12: this.state.remark12,
                        action12: this.state.action12,
                        resourcePath12: this.state.resourcePath12

                    },
                    workenclose: {

                        yesno21: this.state.yesno21,
                        rajha21: this.state.rajha21,
                        permit21: this.state.permit21,
                        subtool21: this.state.subtool21,
                        remark21: this.state.remark21,
                        action21: this.state.action21,
                        resourcePath21: this.state.resourcePath21
                    },

                    aloft: {

                        yesno31: this.state.yesno31,
                        rajha31: this.state.rajha31,
                        permit31: this.state.permit31,
                        subtool31: this.state.subtool31,
                        remark31: this.state.remark31,
                        action31: this.state.action31,
                        resourcePath31: this.state.resourcePath31
                    },


                    oil: {

                        yesno41: this.state.yesno41,
                        rajha41: this.state.rajha41,
                        permit41: this.state.permit41,
                        subtool41: this.state.subtool41,
                        remark41: this.state.remark41,
                        action41: this.state.action41,
                        resourcePath41: this.state.resourcePath41
                    },
                    ihmremove: {

                        yesno51: this.state.yesno51,
                        rajha51: this.state.rajha51,
                        permit51: this.state.permit51,
                        subtool51: this.state.subtool51,
                        remark51: this.state.remark51,
                        action51: this.state.action51,
                        resourcePath51: this.state.resourcePath51
                    },

                    elecwork: {

                        yesno61: this.state.yesno61,
                        rajha61: this.state.rajha61,
                        permit61: this.state.permit61,
                        subtool61: this.state.subtool61,
                        remark61: this.state.remark61,
                        action61: this.state.action61,
                        resourcePath61: this.state.resourcePath61
                    },
                    ihmmat: {

                        yesno71: this.state.yesno71,
                        rajha71: this.state.rajha71,
                        permit71: this.state.permit71,
                        subtool71: this.state.subtool71,
                        remark71: this.state.remark71,
                        action71: this.state.action71,
                        resourcePath71: this.state.resourcePath71
                    },



                },
                interidal: {

                    block: {

                        yesno81: this.state.yesno81,
                        rajha81: this.state.rajha81,
                        permit81: this.state.permit81,
                        subtool81: this.state.subtool81,
                        remark81: this.state.remark81,
                        action81: this.state.action81,
                        resourcePath81: this.state.resourcePath81
                    },

                    platecut: {

                        yesno91: this.state.yesno91,
                        rajha91: this.state.rajha91,
                        permit91: this.state.permit91,
                        subtool91: this.state.subtool91,
                        remark91: this.state.remark91,
                        action91: this.state.action91,
                        resourcePath91: this.state.resourcePath91
                    },
                    crane: {

                        yesno101: this.state.yesno101,
                        rajha101: this.state.rajha101,
                        permit101: this.state.permit101,
                        subtool101: this.state.subtool101,
                        remark101: this.state.remark101,
                        action101: this.state.action101,
                        resourcePath101: this.state.resourcePath101
                    },

                }
            }


        })

        console.log('object', this.state.workplan1)
        // if (this.state.status != true) {





            await Auth.setWorkPlan(this.state.workplan1);
            let result = await Auth.getWorkPlan()
            this.setState({
                updatedwork: result
            })
            console.log('objectcgnnnnnnnnnnnnnnnnnnnn', this.state.updatedwork)
            ToastAndroid.show('data is saved and submitted seccessfully for this day!!!', ToastAndroid.SHORT);
        // }
        // else {

        //     ToastAndroid.show('data is already inserted for this day!!!', ToastAndroid.SHORT);
        // }

    }

    selectFile = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath: source,
                });
                console.log("imageeeeee", this.state.resourcePath)
            }
        });
    };



    selectFile1 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath1: source,
                });
                console.log("imageeeeee", this.state.resourcePath1)
            }
        });
    };


    selectFile2 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath2: source,
                });
                console.log("imageeeeee", this.state.resourcePath2)
            }
        });
    };



    selectFile3 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath3: source,
                });
                console.log("imageeeeee", this.state.resourcePath3)
            }
        });
    };


    selectFile11 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath11: source,
                });
                console.log("imageeeeee", this.state.resourcePath11)
            }
        });
    };


    selectFile12 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath12: source,
                });
                console.log("imageeeeee", this.state.resourcePath12)
            }
        });
    };



    selectFile21 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath21: source,
                });
                console.log("imageeeeee", this.state.resourcePath21)
            }
        });
    };



    selectFile31 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath31: source,
                });
                console.log("imageeeeee", this.state.resourcePath31)
            }
        });
    };



    selectFile41 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath41: source,
                });
                console.log("imageeeeee", this.state.resourcePath41)
            }
        });
    };



    selectFile51 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath51: source,
                });
                console.log("imageeeeee", this.state.resourcePath51)
            }
        });
    };



    selectFile61 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath61: source,
                });
                console.log("imageeeeee", this.state.resourcePath61)
            }
        });
    };



    selectFile71 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath71: source,
                });
                console.log("imageeeeee", this.state.resourcePath71)
            }
        });
    };



    selectFile81 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath81: source,
                });
                console.log("imageeeeee", this.state.resourcePath81)
            }
        });
    };


    selectFile91 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath91: source,
                });
                console.log("imageeeeee", this.state.resourcePath91)
            }
        });
    };


    selectFile101 = async () => {
        var options = {
            title: 'Select Image',
            //   customButtons: [
            //     { 
            //       name: 'customOptionKey', 
            //       title: 'Choose file from Custom Option' 
            //     },
            //   ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, res => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                this.setState({
                    resourcePath101: source,
                });
                console.log("imageeeeee", this.state.resourcePath101)
            }
        });
    };




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
                        <View style={{ height: 30, width: '50%', marginTop: 20, alignSelf: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>


                            {/* <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginTop: 10 }}> */}

                            <Text style={{
                                fontFamily: 'Changa-Medium', fontSize: 14, padding: 5,
                                // marginLeft: 3
                            }}>Date : </Text>
                            <Text style={{
                                fontFamily: 'Changa-Medium', fontSize: 14, padding: 5,
                                // marginLeft: 30 
                            }}>{moment().format("MMM Do YY")}</Text>

                            {/* </View> */}




                        </View>


                        <View style={{

                            height: 60, width: '100%', flexDirection: "row",
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        >
                            <Text style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 13,
                                color: 'black', padding: 5,
                                //  marginLeft: 10
                            }}
                            >
                                Name of HSE MANAGER

</Text>
                            <View style={{ width: '10%' }}></View>

                            <TextInput

                                style={{
                                    // marginBottom: 20, 
                                    color: 'black',

                                    width: '40%',
                                    height: 60, width: '50%', alignItems: 'flex-start', flexDirection: "row",
                                    // justifyContent: 'space-between',
                                    alignSelf: 'flex-start',
                                    borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 13
                                }}

                                placeholder='HSE Manager'
                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                keyboardType='email-address'
                                onChangeText={(value) => this.setState({ hse: value })}
                                value={this.state.hse}
                            />

                        </View>
                        <View style={{

                            height: 60, width: '100%', flexDirection: "row",
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        >
                            <Text style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 13,
                                color: 'black', padding: 5
                                //  marginLeft: 10
                            }}
                            >
                                Name of Site Supdt
                            </Text>

                            <View style={{ width: '15%' }}></View>

                            <TextInput

                                style={{
                                    // marginBottom: 20, 
                                    color: 'black',

                                    width: '40%',
                                    height: 60, width: '50%', alignItems: 'flex-start', flexDirection: "row",
                                    // justifyContent: 'space-between',
                                    alignSelf: 'flex-start',
                                    borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 13
                                }}

                                placeholder='Site Supdt'
                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                keyboardType='email-address'
                                onChangeText={(value) => this.setState({ hse: value })}
                                value={this.state.hse}
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

                        <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row', }}>



                            <View style={{ width: '20%', flexDirection: 'column', alignItems: 'center' }}>



                                <View style={{ height: 120 }}></View>






                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', width: 65,
                                    alignSelf: 'center',
                                    height: 65,
                                }}>

                                    <Text style={{
                                        fontFamily: 'Changa-Medium', fontSize: 13,
                                        //  marginRight:5,
                                        padding: 5
                                    }}>
                                        Hot work

                                    </Text>


                                </View>




                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center',
                                    height: 120, padding: 5
                                }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                                        Lifting-shifting




                                    </Text>


                                </View>

                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center',
                                    height: 80, padding: 5
                                }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                                        IHM material disposal




                                    </Text>


                                </View>

                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'flex-start', alignSelf: 'center',
                                    height: 135, padding: 8
                                }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                                        Loading-unloading



                                    </Text>


                                </View>



                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>
                                    {/* col name */}

                                    <WorkColName />


                                    {/* picker box gulo for hot work */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35,
                                                width: '100%',
                                                justifyContent: 'center',
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
                                                    textStyle={{ fontSize: 8, }}
                                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                                                    style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                                                    // selectedValue={this.state.selected}
                                                    // onValueChange={this.onValueChange.bind(this)}
                                                    onValueChange={(value) => this.setState({ yesno: value })}
                                                    selectedValue={this.state.yesno}

                                                //     onValueChange={(value) => {
                                                //         this.state.allwork.hotwork.yesno=value;
                                                //        // this.state.address.phone=value
                                                //        this.setState({})
                                                //      }}
                                                //   value={this.state.allwork.hotwork.yesno}
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
                                            {/* <Text>{this.state.yesno}</Text> */}

                                        </View>



                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120,
                                            //  height: 60
                                        }}>


                                            <View style={{
                                                width: '100%',
                                                height: 35, justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha: value })}
                                                    selectedValue={this.state.rajha}
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

                                            {/* <Text>{this.state.rajha}</Text> */}






                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120, }}>

                                            <View style={{
                                                height: 35, width: "100%", justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit: value })}
                                                    selectedValue={this.state.permit}
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

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool: value })}
                                                    selectedValue={this.state.subtool}
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

                                        <TouchableOpacity
                                            onPress={() => this.selectFile()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground
                                                        source={require('../assets/camera.jpg')}
                                                        style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    // marginBottom: 20,
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1, width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center'
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark: value })}
                                                value={this.state.remark}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    // marginBottom: 20,
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action: value })}
                                                value={this.state.action}

                                            />

                                        </View>

                                    </View>


                                    {/* LIFT ND SHIFT PICKER */}




                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35,
                                                width: '100%',
                                                justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno1: value })}
                                                    selectedValue={this.state.yesno1}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha1: value })}
                                                    selectedValue={this.state.rajha1}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit1: value })}
                                                    selectedValue={this.state.permit1}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool1: value })}
                                                    selectedValue={this.state.subtool1}
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

                                        <TouchableOpacity
                                            onPress={() => this.selectFile1()}
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}

                                                        <Image source={{ uri: this.state.resourcePath1.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1, width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center'
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark1: value })}
                                                value={this.state.remark1}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action1: value })}
                                                value={this.state.action1}

                                            />

                                        </View>


                                    </View>

                                    {/* ihm er picker */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno2: value })}
                                                    selectedValue={this.state.yesno2}
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



                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha2: value })}
                                                    selectedValue={this.state.rajha2}
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

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit2: value })}
                                                    selectedValue={this.state.permit2}
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

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool2: value })}
                                                    selectedValue={this.state.subtool2}
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

                                        <TouchableOpacity
                                       onPress={() => this.selectFile2()}
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath2.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark2: value })}
                                                value={this.state.remark2}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action2: value })}
                                                value={this.state.action2}

                                            />

                                        </View>

                                    </View>

                                    {/* loading er picker */}

                                    

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno3: value })}
                                                    selectedValue={this.state.yesno3}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha3: value })}
                                                    selectedValue={this.state.rajha3}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit3: value })}
                                                    selectedValue={this.state.permit3}
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

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool3: value })}
                                                    selectedValue={this.state.subtool3}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile3()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath3.uri }}
                                                         style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                          
                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark3: value })}
                                                value={this.state.remark3}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action3: value })}
                                                value={this.state.action3}

                                            />

                                        </View>

                                    </View>


                                </View>



                            </ScrollView>



                        </View>


                        {/* Vessel start */}



                        <View style={{ justifyContent: 'flex-start', width: '90%', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#147BDF' }}>Vessel</Text>

                        </View>




                        <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row', }}>



                            <View style={{ width: '20%', flexDirection: 'column', alignItems: 'center' }}>



                                <View style={{ height: 135 }}></View>
                                {/* justifyContent: 'center', alignItems: 'center', width: 65,
                                    alignSelf: 'center',
                                    height: 65 */}

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 65 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginBottom: 40, padding: 5 }}>
                                        Hot work
                                    </Text>


                                </View>




                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Critical lifting
                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Work in enclosed space
                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                                        Work aloft
                                    </Text>


                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Oil Removal
                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        IHM removal
                                    </Text>

                                </View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Electrical work
                                    </Text>

                                </View>


                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        IHM material disposal
                                    </Text>

                                </View>





                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>

                                    <WorkColName />


                                    {/* picker box gulo for hot work */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno11: value })}
                                                    selectedValue={this.state.yesno11}
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



                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha11: value })}
                                                    selectedValue={this.state.rajha11}
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

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit11: value })}
                                                    selectedValue={this.state.permit11}
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

                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
                                            width: 120,
                                            //  height: 60
                                        }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool11: value })}
                                                    selectedValue={this.state.subtool11}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile11()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                                 <Image source={{ uri: this.state.resourcePath11.uri }}
                                                                    style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark11: value })}
                                                value={this.state.remark11}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action11: value })}
                                                value={this.state.action11}

                                            />

                                        </View>

                                    </View>


                                    {/* LIFT ND Critical lifting */}

                                   
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120, }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno12: value })}
                                                    selectedValue={this.state.yesno12}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha12: value })}
                                                    selectedValue={this.state.rajha12}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permil12: value })}
                                                    selectedValue={this.state.permil12}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool12: value })}
                                                    selectedValue={this.state.subtool12}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile12()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath12.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark12: value })}
                                                value={this.state.remark12}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action12: value })}
                                                value={this.state.action12}

                                            />

                                        </View>


                                    </View>

                                    {/* Work in enclosed space er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno21: value })}
                                                    selectedValue={this.state.yesno21}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha21: value })}
                                                    selectedValue={this.state.rajha21}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit21: value })}
                                                    selectedValue={this.state.permit21}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool21: value })}
                                                    selectedValue={this.state.subtool21}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile21()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath21.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark21: value })}
                                                value={this.state.remark21}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action21: value })}
                                                value={this.state.action21}

                                            />

                                        </View>

                                    </View>

                                    {/* Work aloft er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno31: value })}
                                                    selectedValue={this.state.yesno31}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha31: value })}
                                                    selectedValue={this.state.rajha31}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit31: value })}
                                                    selectedValue={this.state.permit31}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool31: value })}
                                                    selectedValue={this.state.subtool31}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile31()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath31.uri }}
                                                                style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark31: value })}
                                                value={this.state.remark31}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action31: value })}
                                                value={this.state.action31}

                                            />

                                        </View>

                                    </View>



                                    {/* Oil Removal PICKER */}





                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno41: value })}
                                                    selectedValue={this.state.yesno41}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha41: value })}
                                                    selectedValue={this.state.rajha41}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit41: value })}
                                                    selectedValue={this.state.permit41}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool41: value })}
                                                    selectedValue={this.state.subtool41}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile41()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath41.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark41: value })}
                                                value={this.state.remark41}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action41: value })}
                                                value={this.state.action41}

                                            />

                                        </View>


                                    </View>

                                    {/* IHM removal er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno51: value })}
                                                    selectedValue={this.state.yesno51}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha51: value })}
                                                    selectedValue={this.state.rajha51}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit51: value })}
                                                    selectedValue={this.state.permit51}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool51: value })}
                                                    selectedValue={this.state.subtool51}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile51()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath51.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark51: value })}
                                                value={this.state.remark51}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action51: value })}
                                                value={this.state.action51}

                                            />

                                        </View>

                                    </View>


                                    {/* Electrical work er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno61: value })}
                                                    selectedValue={this.state.yesno61}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha61: value })}
                                                    selectedValue={this.state.rajha61}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit61: value })}
                                                    selectedValue={this.state.permit61}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool61: value })}
                                                    selectedValue={this.state.subtool61}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile61()}
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath61.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark61: value })}
                                                value={this.state.remark61}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action61: value })}
                                                value={this.state.action61}

                                            />

                                        </View>

                                    </View>


                                    {/* IHM material disposal er picker */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno71: value })}
                                                    selectedValue={this.state.yesno71}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha71: value })}
                                                    selectedValue={this.state.rajha71}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit71: value })}
                                                    selectedValue={this.state.permit71}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool71: value })}
                                                    selectedValue={this.state.subtool71}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile71()}
                                        
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath71.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark71: value })}
                                                value={this.state.remark71}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action71: value })}
                                                value={this.state.action71}

                                            />

                                        </View>

                                    </View>



                                </View>



                            </ScrollView>



                        </View>
                        {/* interidal start */}

                        <View style={{ justifyContent: 'flex-start', width: '90%', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#147BDF' }}>Intertidal</Text>

                        </View>



                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



                            <View style={{ width: '20%', flexDirection: 'column', alignItems: 'center' }}>



                                <View style={{ height: 135 }}></View>
                                {/* justifyContent: 'center', alignItems: 'center', width: 65,
                                    alignSelf: 'center',
                                    height: 65, */}

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Blocks falling
                                    </Text>


                                </View>




                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100, marginBottom: 20 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Plate Cutting





                                    </Text>


                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', marginBottom: 50 }}>

                                    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, padding: 5 }}>
                                        Crane Lifting-Shifting





                                    </Text>


                                </View>
                            </View>

                            <ScrollView
                                horizontal={true}


                            >
                                <View style={{ flex: 1 }}>

                                    <WorkColName />


                                    {/* picker box gulo for hot work */}

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno81: value })}
                                                    selectedValue={this.state.yesno81}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha81: value })}
                                                    selectedValue={this.state.rajha81}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit81: value })}
                                                    selectedValue={this.state.permit81}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool81: value })}
                                                    selectedValue={this.state.subtool81}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile81()}
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath81.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />

                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark81: value })}
                                                value={this.state.remark81}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action81: value })}
                                                value={this.state.action81}

                                            />

                                        </View>

                                    </View>


                                    {/* LIFT ND SHIFT PICKER */}


                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno91: value })}
                                                    selectedValue={this.state.yesno91}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha91: value })}
                                                    selectedValue={this.state.rajha91}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit91: value })}
                                                    selectedValue={this.state.permit91}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool91: value })}
                                                    selectedValue={this.state.subtool91}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile91()}

                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath91.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />


                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark91: value })}
                                                value={this.state.remark91}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action91: value })}
                                                value={this.state.action91}

                                            />

                                        </View>


                                    </View>



                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ yesno101: value })}
                                                    selectedValue={this.state.yesno101}
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



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ rajha101: value })}
                                                    selectedValue={this.state.rajha101}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ permit101: value })}
                                                    selectedValue={this.state.permit101}
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

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <View style={{
                                                height: 35, width: '100%', justifyContent: 'center',
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
                                                    onValueChange={(value) => this.setState({ subtool101: value })}
                                                    selectedValue={this.state.subtool101}
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

                                        <TouchableOpacity
                                        onPress={() => this.selectFile101()}
                                            style={{ justifyContent: 'center', alignItems: 'center', width: 120, alignSelf: 'center', margin: 10 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                                                <View style={{ width: '70%', }}>
                                                    <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath101.uri }}
                                                            style={[styles.selectphoto]} resizeMode="cover" />


                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                                        </TouchableOpacity>



                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                                            {/* <TextInput
    placeholder='remarks'

    multiline={true}>

</TextInput> */}

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Remarks'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ remark101: value })}
                                                value={this.state.remark101}

                                            />


                                        </View>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                                            <TextInput

                                                style={{
                                                    width: 100, justifyContent: 'center',
                                                    alignContent: 'center', alignItems: 'center',
                                                    color: 'black',
                                                    borderBottomColor: 'black', borderBottomWidth: 1,
                                                }}

                                                placeholder='Yard Actions'
                                                placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                                                multiline={true}
                                                onChangeText={(value) => this.setState({ action101: value })}
                                                value={this.state.action101}

                                            />

                                        </View>



                                    </View>



                                </View>



                            </ScrollView>



                        </View>

                    </View>



                    {this.state.updatedwork.status == false ?
                        <View style={{
                            height: 50, width: '100%', backgroundColor: 'white', justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'row',
                        }}>
                            <TouchableOpacity
                                onPress={() => this.workplan()}
                                disabled={this.state.status}

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
                        :

                        <View style={{
                            height: 50, width: width, backgroundColor: 'white', justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'row',
                        }}>
                            <Pressable
                                // onPress={() => this.workplan()}
                                // disabled={this.state.status}

                                style={{
                                    height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                                    //   borderRadius:9,
                                    elevation: 5,
                                    backgroundColor: '#147BDF',
                                    opacity: .5
                                }}>

                                <Text style={{

                                    fontSize: 15,
                                    color: 'white',
                                    textAlign: 'center'
                                }}>Already Submitted</Text>

                            </Pressable>

                        </View>
                    }







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

    selectphoto: {
        flex: 1,
        // height: undefined,
        // width: undefined
        width: 80,
        height: 50,
        // borderRadius: 100,
        //overflow: "hidden",
        // marginTop: 15,

    },

})

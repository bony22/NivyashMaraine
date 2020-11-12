import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Pressable, ToastAndroid, ImageBackground, StatusBar, ScrollView } from 'react-native';
import { Container, Right, Icon, Picker } from 'native-base';

import Statbar from './IndexStatusbar/Statbar';

const { width, height } = Dimensions.get('window')

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // status: true,
            status: this.props.navigation.getParam('status', true),
            email: '',
            password: '',
            type: '',
            otp: '',
            user_info: '',
            account: {},
            name:'',


            lastname:'',
            biography:'',            
            companyname:'',
            facebook:'',
            twitter:'',
            instagram:'',
            linkedin:'',
            skype:'',
            github:'',
        
            picker_value: [
                { value: 'PM' },
                { value: 'TM' },

            ]

        };
    }


    async componentDidMount() {
        // StatusBar.setBackgroundColor('white')
        // StatusBar.setBarStyle( 'light-content',true)
    }
    change = () => {
        this.setState({
            status: false
        })

    }
    change1 = () => {
        this.setState({
            status: true
        })

    }

    mylogin = async () => {
        console.log(this.state.email)


        if (this.state.email != '' && this.state.password != '') {
            let data = {
                email: this.state.email,
                password: this.state.password,
                type: this.state.type,

            }
            let info = await Auth.login(data);
            console.log('info', info)
            if (info && info.status == true) {
                this.setState({
                    account: info,
                })

                // await Auth.setAccount(this.state.account);
                ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
                Navigation.navigate('Board');


            } else {
                ToastAndroid.show('Invalid email or Password', ToastAndroid.SHORT)
            }
        }
        else {
            ToastAndroid.show('Please input all fields', ToastAndroid.SHORT)
        }
    }

    mysignin = async () => {
        // console.log(this.state.email)


        if (this.state.email != '' && this.state.password != '' && this.state.name!=''&& this.state.type!='') {
            let data = {
                email: this.state.email,
                password: this.state.password,
                type: this.state.type,
                firstname:this.state.name,
            }
            // let info = await Auth.register(data);
            console.log('infoooooo', info)
           
        }
        else {
            ToastAndroid.show('Please input all fields', ToastAndroid.SHORT)
        }
    }





    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* <StatusBar barStyle="light-content" backgroundColor='#147BDF' /> */}
                <Statbar/>
                <View style={{ justifyContent: 'center', width: '100%', flex: 1, backgroundColor: '#147BDF' }}>
                    <ScrollView style={{ flex: 1 }}>

                        <View style={{
                            flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start',
                            //  backgroundColor:'red'
                        }}>
                            <View style={{ height: 30, width: "100%", top: 0 }}>
                                <Text style={{
                                    textAlign: 'center', color: 'white', padding: 15,
                                    fontFamily: 'DancingScript',
                                    fontSize: 50,

                                    color: 'white'
                                }}>nivyash</Text>

                            </View>
                            <View style={{ height: 285, width: "100%", alignItems: 'center', justifyContent: 'flex-end' }} >
                                <Image source={require('@Assets/picc.png')} style={{
                                    height: 250,
                                    width: 250,
                                    resizeMode: 'cover',

                                }} />


                            </View>
                            {/* <View style={{
                                height: 50, width: '90%', alignItems: 'center', flexDirection: "row", marginTop: 10,
                                justifyContent: 'flex-start',
                                alignSelf: 'center',
                            }}>
                                <Text style={styles.unselectstyle}>
                                    Type Of User
                                </Text>

                            </View> */}

                            {/* <View style={{
                                height: 50, width: '90%', justifyContent: 'center',
                                marginBottom: 13,
                                marginRight: 15,
                                //  justifyContent: 'flex-start',
                                alignItems: 'center',
                                backgroundColor: '#1273DE',
                                //   margin:4,
                            }}>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Type Of users"
                                    textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                                    style={{ width: '100%', color: 'white', height: 30, fontFamily: 'Changa-Medium' }}
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

                            </View> */}

                            <View style={{
                                height: 50, width: '90%', alignItems: 'center', flexDirection: "row", marginTop: 10,
                                justifyContent: 'flex-start',
                                alignSelf: 'center',
                            }}>
                                <Pressable 
                                //onPress={() => this.change1()}
                                    style={{
                                        height: 50, width: '40%',

                                    }}>
                                    <Text
                                        style={ styles.unselectstyle}>LOGIN</Text>
                                </Pressable>
                                {/* <Pressable onPress={() => this.change()}
                                    style={{
                                        height: 50, width: '40%',

                                    }}>
                                    <Text style={[(this.state.status) ? styles.unselectstyle : styles.selectstyle]}>SIGNUP</Text>
                                </Pressable> */}

                            </View>
                          
                                <View style={{ height: 250, width: '100%', justifyContent: "flex-start", alignItems: 'center' }}>
                                    <View style={{
                                        height: 50, width: '90%', justifyContent: "center", alignItems: 'center', backgroundColor: '#1273DE',

                                    }}>
                                        <TextInput placeholder='Email'
                                            placeholderTextColor='white'
                                            style={{
                                                height: 50, width: '100%', marginTop: 5, backgroundColor: '#1273DE', fontFamily: 'Poppins-Medium',
                                                fontSize: 16,
                                                color: 'white', padding: 10
                                            }}
                                            onChangeText={(value) => this.setState({ email: value })}
                                            value={this.state.email}
                                        >

                                        </TextInput>


                                    </View>
                                    {/* <View style={{height:20,width:'90%',justifyContent:"center",alignItems:'center'}}/> */}


                                    <View style={{
                                        height: 60, width: '90%', justifyContent: "center", alignItems: 'center',
                                        backgrondColor: '#1273DE',
                                        marginTop: 10
                                        //  backgroundColor:'red',
                                    }}>
                                        <TextInput placeholder='Password'
                                            placeholderTextColor='white'

                                            style={{
                                                height: 60, width: '100%', marginTop: 5, fontFamily: 'Poppins-Medium', backgroundColor: '#1273DE',
                                                fontSize: 16,
                                                color: 'white',
                                                padding: 10
                                            }}
                                            onChangeText={(value) => this.setState({ password: value })}
                                            value={this.state.password}
                                        >

                                        </TextInput>




                                    </View>
                                    <View style={{ height: 50, width: '90%', justifyContent: "center", alignItems: 'center' }} />

                                    <View style={{ height: 20, width: '90%', justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{
                                            fontFamily: 'OpenSans',
                                            fontSize: 16,
                                            color: 'white',
                                        }}>Forgot Password?</Text>




                                        <Pressable
                                             onPress={() => this.props.navigation.navigate('AllTabs')}
                                          //  onPress={() => this.mylogin()}
                                            style={{
                                                height: 50, width: '40%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#2dd8cf',
                                            }}>
                                            <Text style={{
                                                fontFamily: 'OpenSans',
                                                fontSize: 16,
                                                color: 'white'
                                            }}>LOGIN</Text>
                                        </Pressable>
                                    </View>



                                </View>
                                {/* : */}


                                {/* <View style={{ height: 300, width: '100%', justifyContent: "flex-start", alignItems: 'center', }}>

                                    <View style={{
                                        height: 60, width: '90%', justifyContent: "center", alignItems: 'center', backgroundColor: '#1273DE',

                                    }}>
                                        <TextInput placeholder='Name'
                                            placeholderTextColor='white'
                                            style={{
                                                height: 60, width: '100%', marginTop: 5, backgroundColor: '#1273DE', fontFamily: 'Poppins-Medium',
                                                fontSize: 16,
                                                color: 'white',
                                                padding: 10
                                            }}
                                            onChangeText={(value) => this.setState({ name: value })}
                                            value={this.state.name}
                                        >

                                        </TextInput>


                                    </View>
                                    <View style={{ height: 10, width: '90%', justifyContent: "center", alignItems: 'center' }} />


                                    <View style={{
                                        height: 60, width: '90%', justifyContent: "center", alignItems: 'center',
                                        backgrondColor: '#1273DE',

                                        //  backgroundColor:'red',
                                    }}>
                                        <TextInput placeholder='Email'
                                            placeholderTextColor='white'

                                            style={{
                                                height: 60, width: '100%', marginTop: 5, fontFamily: 'Poppins-Medium', backgroundColor: '#1273DE',
                                                fontSize: 16,
                                                color: 'white',
                                                padding: 10
                                            }}
                                            onChangeText={(value) => this.setState({ email: value })}
                                            value={this.state.email}
                                        >

                                        </TextInput>




                                    </View>
                                    <View style={{ height: 10, width: '90%', justifyContent: "center", alignItems: 'center' }} />
                                    <View style={{
                                        height: 60, width: '90%', justifyContent: "center", alignItems: 'center',

                                        backgrondColor: '#1273DE',
                                        //  backgroundColor:'red',
                                    }}>
                                        <TextInput placeholder='Password'
                                            placeholderTextColor='white'

                                            style={{
                                                height: 60, width: '100%', marginTop: 5, fontFamily: 'Poppins-Medium', backgroundColor: '#1273DE',
                                                fontSize: 16,
                                                color: 'white',
                                                padding: 10
                                            }}
                                            onChangeText={(value) => this.setState({ password: value })}
                                            value={this.state.password}
                                        >

                                        </TextInput>




                                    </View>


                                    <View style={{ height: 100, width: '90%', justifyContent: "center", alignItems: 'center' }}>



                                        <Pressable
                                       //  onPress={() => this.mysignin()}
                                            // onPress={() => this.props.navigation.navigate('Verify')}
                                            style={{
                                                height: 50, width: '40%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#fb9e00', marginTop: 10
                                            }}>
                                            <Text style={{
                                                fontFamily: 'Poppins-Medium',
                                                fontSize: 16,
                                                color: 'white'
                                            }}>SIGN UP</Text>
                                        </Pressable>
                                    </View> */}



                                {/* </View> */}
                            

                        </View>

                    </ScrollView>

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
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'white',



    },

})

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Pressable, ToastAndroid, ImageBackground, StatusBar, ScrollView, Alert, Platform, Net } from 'react-native';
import { Container, Right, Icon, Picker } from 'native-base';
import Statbar from './IndexStatusbar/Statbar';
import Auth from '../service/Auth';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllTab2 from './AllTab2';

const { width, height } = Dimensions.get('window')

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {


            hse: '',
            site: '',
            yesno:'N/A',
            rajha: 'N/A',
            permit: 'N/A',
            subtool: 'N/A',
            remark: 'N/A',
            action: 'N/A',

            yesno1: '',
            rajha1: '',
            permit1: '',
            subtool1: '',
            remark1: '',
            action1: '',


            yesno2: '',
            rajha2: '',
            permit2: '',
            subtool2: '',
            remark2: '',
            action2: '',

            yesno3: '',
            rajha3: '',
            permit3: '',
            subtool3: '',
            remark3: '',
            action3: '',


            workplan1: {},


            picker_value1: [
                { value: 'N/A' },
                { value: 'YES' },
                { value: 'NO' },

            ],

            // status: true,
            // status: this.props.navigation.getParam('status', true),
            email: '',
            password: '',
            pwd: '',
            user: '',
            netstatus: true,
            isConnected: true,
            picker_value: [
                { value: 'PM' },
                { value: 'TM' },

            ],
            userdetails: {}

        };
    }


    async componentDidMount() {

        var useremail = await Auth.getAccount();
        var userpwd = await Auth.getPassWord();
        this.setState({
            pwd: userpwd,
            user: useremail
        })
        await Auth.setWorkPlan();
        
        console.log('passworddddd', this.state.pwd)
        
        console.log('tttt',user)
        this.workplan()
        var user= await Auth.getWorkPlan();
        console.log('usernameeeeeeeeee', this.state.user)
        // this.CheckConnectivity()
        // console.log('netstatus', this.state.netstatus)

    }

    workplan = async () => {


        this.setState({
          
     
         workplan1 : {

            hse: this.state.hse,

            site: this.state.site,
            hotwork: {
                yesno: this.state.yesno,
                rajha: this.state.rajha,
                permit: this.state.permit,
                subtool: this.state.subtool,
                remark: this.state.remark,
                action: this.state.action,

            },
            lift: {

                yesno1: this.state.yesno1,
                rajha1: this.state.rajha1,
                permit1: this.state.permit1,
                subtool1: this.state.subtool1,
                remark1: this.state.remark1,
                action1: this.state.action1,

            },
            ihm: {

                yesno2: this.state.yesno2,
                rajha2: this.state.rajha2,
                permit2: this.state.permit2,
                subtool2: this.state.subtool2,
                remark2: this.state.remark2,
                action2: this.state.action2,
            },

            load: {

                yesno3: this.state.yesno3,
                rajha3: this.state.rajha3,
                permit3: this.state.permit3,
                subtool3: this.state.subtool3,
                remark3: this.state.remark3,
                action3: this.state.action3,
            },

        }
    })

        console.log('object', this.state.workplan1)

          

            await Auth.setWorkPlan(this.state.workplan1);
            let result= await Auth.getWorkPlan()
            console.log('objectcgnnnnnnnnnnnnnnnnnnnn',result)
        
    }

s


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

    CheckConnectivity = async () => {
        // For Android devices
        if (Platform.OS === "android") {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected == true) {
                    Alert.alert("You are online!");
                }
                else {
                    Alert.alert('you r offline')
                    this.setState({
                        netstatus: false
                    })

                }
            })
        }
    }


    mylogin = async () => {

        let data = {

            username: this.state.email,

            password: this.state.password,
        }
        // const pwd1 = getPassWord()
        // const user1 = getAccount()


        if (this.state.email != '' && this.state.password != '') {

            console.log('object', data)



            if (this.state.netstatus == true) {



                // this.CheckConnectivity()
                const url = 'https://nivyash.geoalgo.in/user/login'


                console.log(url)

                const rawResponse = await fetch(url, {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',


                    },
                    body: JSON.stringify(data)
                    // body:data
                });

                const content = await rawResponse.json();

                this.setState({
                    userdetails: content,
                    // indicatorLoading: false,


                })

                console.log(content);

                if(content.data != null){

                    ToastAndroid.show('Login successfully!!!', ToastAndroid.SHORT);
                    await Auth.setAccount(this.state.userdetails.data);
                    await Auth.setPassWord(this.state.password);
                    // AsyncStorage.multiSet([
                    //     ["email", this.state.userdetails.data],
                    //     ["password", this.state.password]
                    // ])
    
                    // var pwd = await Auth.getPassWord();
                    // var user = await Auth.getAccount();
                    // console.log('password', pwd)
                    // console.log('username', user)
                    console.log('userdetail', this.state.userdetails)
    
                    this.props.navigation.navigate('NewTab')
                    // Navigation.navigate(AllTab2)

                }

                else{
                    ToastAndroid.show('Login failed!!!', ToastAndroid.SHORT);
                }



               


            }

            else {
                Alert.alert("You are offline!");

                if (this.state.user.username == '' && this.state.pwd == '') {
                    if (this.state.user.username == this.state.email && this.state.pwd == this.state.password) {

                        ToastAndroid.show('Login successfully!!!', ToastAndroid.SHORT);
                        this.props.navigation.navigate('AllTab2')
                    }

                    else {
                        ToastAndroid.show('No username against this !!', ToastAndroid.SHORT);
                    }
                }
            }
            //  });
        }


        else {
            Alert.alert(
                'please enter all fields correctly'
            )
        }


    }





    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                {/* <StatusBar barStyle="light-content" backgroundColor='#147BDF' /> */}
                <Statbar />
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
                                        style={styles.unselectstyle}>LOGIN</Text>
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
                                    {/* <Text style={{
                                            fontFamily: 'OpenSans',
                                            fontSize: 16,
                                            color: 'white',
                                        }}>Forgot Password?</Text> */}




                                    <Pressable
                                         // onPress={() => this.props.navigation.navigate('AllTabs')}
                                        onPress={() => this.mylogin()}
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

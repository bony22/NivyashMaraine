import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, ScrollView, StatusBar, Pressable, TouchableOpacity } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Tab, Tabs, TabHeading } from 'native-base';



const { height, width } = Dimensions.get('window');

export default class NewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{
                    height: 250, width: width, backgroundColor: 'white', justifyContent: 'center',
                    flexDirection: 'row',alignItems:'center',
                }}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('WorkPlan')}

                        style={{
                            height: 150, width: '45%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                            backgroundColor: '#147BDF',
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: '#fff',
                            textAlign: 'center'
                        }}>Work Plan</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Yard')}

                        style={{
                            height: 150, width: '45%', alignItems: 'center', justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                            borderWidth: 1,
                            backgroundColor: '#147BDF'
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>Yard</Text>

                    </TouchableOpacity>


                </View>

                {/* <View style={{height:250}}></View> */}

                <View style={{
                    height: 250, width: width, backgroundColor: 'white', justifyContent: 'center',
                    flexDirection: 'row',alignItems:'center'
                }}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Vessel')}

                        style={{
                            height: 150, width: '45%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                            backgroundColor: '#147BDF',
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: '#fff',
                            textAlign: 'center'
                        }}>Vessel</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Enviorment')}

                        style={{
                            height: 150, width: '45%', alignItems: 'center', justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: 'white',
                            //   borderRadius:9,
                            elevation: 5,
                            borderWidth: 1,
                            backgroundColor: '#147BDF'
                        }}>

                        <Text style={{

                            fontSize: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}>Enviornment</Text>

                    </TouchableOpacity>


                </View>
                
            </View>
        );
    }
}

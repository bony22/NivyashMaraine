import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,TextInput,Image,Modal,ScrollView,StatusBar,Pressable} from 'react-native';
import {  Card, Left, CardItem,Item, Input,Icon,Label,Button, Right,Tab, Tabs,TabHeading } from 'native-base';
// import BookingHistory from '../BookingHistory/BookingHistory';
// import Clinic from '../Clinic/Clinic';
// import PaymentDetails from '../PaymentDetails/PaymentDetails';
// import TestDetails from '../TestDetails/TestDetails';



const {height,width} = Dimensions.get('window');


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

        <View style={styles.mainView}>

              <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD"/>

                    <View style={styles.Upper}>
                        <Pressable onPress={() => this.props.navigation.navigate('OtherDetails')}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                                <Icon name="ios-arrow-back" type='Ionicons'
                                    style={{ color: "#ffffff", fontSize: 25, }} />
                            </View>
                        </Pressable>
                        <View style={{ width: '60%', marginTop: 18, }}>
                            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Booking History</Text>
                        </View>

                    </View>

                    {/* <Tab heading={ <TabHeading><Text style={styles.tabsText}>ALL</Text></TabHeading>}>
                            
                        </Tab> */}



            <Tabs style={{width:'100%',marginVertical:1}} tabBarInactiveTextColor="#A8AEA8" tabBarUnderlineStyle={{borderBottomWidth:3,borderColor:'#147BDF'}}>

                <Tab heading=
                {

                <TabHeading style={{backgroundColor:'#f4f4f4'}}>
                    <Text style={{fontFamily:'Roboto-Bold',color:'#5D6D7E'}}>Work Plan</Text>
                </TabHeading>

                }
                 
                 activeTabStyle={{backgroundColor:'#0A8C16'}}  >
                
                    {/* <BookingHistory/> */}
                    {/* doctorDetails={this.state.chatinfo} */}
                   

                </Tab>

                <Tab heading={<TabHeading style={{backgroundColor:'#f4f4f4'}}>
                    <Text style={{fontFamily:'Roboto-Bold',color:'#5D6D7E'}}>Yard</Text></TabHeading>}
                 
                 activeTabStyle={{backgroundColor:'#0A8C16'}}  activeTextStyle={{color: '#f4f4f4', }}>
                
                {/* <PaymentDetails/> */}

                </Tab>


                <Tab heading={<TabHeading style={{backgroundColor:'#f4f4f4'}}>
                    <Text style={{fontFamily:'Roboto-Bold',color:'#5D6D7E'}}>Vessal</Text></TabHeading>}
                 
                 activeTabStyle={{backgroundColor:'#0A8C16'}}  activeTextStyle={{color: '#f4f4f4', }}>
                
                {/* <TestDetails/>   */}

                </Tab>

                <Tab heading={<TabHeading style={{backgroundColor:'#f4f4f4'}}>
                    <Text style={{fontFamily:'Roboto-Bold',color:'#5D6D7E'}}>Environment</Text></TabHeading>}
                 
                 activeTabStyle={{backgroundColor:'#0A8C16'}}  activeTextStyle={{color: '#f4f4f4', }}>
                
                {/* <TestDetails/>   */}

                </Tab>

                
            </Tabs>
        </View>
    );
  }
}

const styles=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    Upper: {
        backgroundColor: '#147BDF',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        elevation:3
        // marginHorizontal: 15,
        // marginTop: 15,

        // marginVertical:5
    },
})

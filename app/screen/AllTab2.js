import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,TextInput,Image,Modal,ScrollView,StatusBar,Pressable} from 'react-native';
import {  Card, Left, CardItem,Item, Input,Icon,Label,Button, Right,Tab, Tabs,TabHeading } from 'native-base';
//  import BookingHistory from '../BookingHistory/BookingHistory';
import WorkPlan from './WorkPlan';
import Vessel from './Vessel';
import Enviorment from './Enviorment';
import Yard from './Yard';

// import Clinic from '../Clinic/Clinic';
// import PaymentDetails from '../PaymentDetails/PaymentDetails';
// import TestDetails from '../TestDetails/TestDetails';

const { width, height } = Dimensions.get('window')

export default class AllTab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        status:1,
        // status2:0,
        // status3:0,
        // status4:0,

    };
  }


//   change = () => {
//     this.setState({
//         status: 1
//     })

// }
change1 = () => {
    this.setState({
        status: 1
    })

}
change2 = () => {
    this.setState({
        status: 2
    })

}

change3 = () => {
    this.setState({
        status: 3
    })

}

change4 = () => {
    this.setState({
        status: 4
    })

}


  render() {
    return (

<View style={{flex:1}}>
        <View style={styles.Upper}>
                        <Pressable onPress={() => this.props.navigation.navigate('OtherDetails')}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
                                <Icon name="ios-arrow-back" type='Ionicons'
                                    style={{ color: "#ffffff", fontSize: 25, }} />
                            </View>
                        </Pressable>
                        <View style={{ width: '60%', marginTop: 18, }}>
                            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>All Tabs</Text>
                        </View>

         </View>
        
      <View style={{alignItems:'center'}}>


          

          <View style={{
                                height: 80,  flexDirection: "row", marginTop: 10,alignItems:'center',
                                justifyContent: 'space-evenly',width:'100%',padding:5,
                               
                            }}>
                                <ScrollView
          horizontal={true} 
          >
                                <Pressable
                                 onPress={() => this.change1()}
                                    style={{
                                        height: 60, width:100,justifyContent:'center',alignItems:'center',flexDirection:'row'

                                    }}>
                                    <Text
                                        style={[(this.state.status ==1) ? styles.selectstyle : styles.unselectstyle]}>Work Plan</Text>
                                </Pressable>


                                <Pressable 
                                onPress={() => this.change2()}
                                    style={{
                                        height: 60,  width:100,justifyContent:'center',alignItems:'center',flexDirection:'row'


                                    }}>
                                    <Text style={[(this.state.status==2) ? styles.selectstyle : styles.unselectstyle]}>Yard</Text>
                                </Pressable>

                                <Pressable 
                                onPress={() => this.change3()}
                                    style={{
                                        height: 60,  width:100,justifyContent:'center',alignItems:'center',flexDirection:'row'


                                    }}>
                                    <Text
                                        style={[(this.state.status==3) ? styles.selectstyle : styles.unselectstyle]}>Vessel</Text>
                                </Pressable>

                                <Pressable
                                 onPress={() => this.change4()}
                                    style={{
                                        height: 60,  width:100,justifyContent:'center',alignItems:'center',flexDirection:'row'


                                    }}>
                                    <Text style={[(this.state.status==4) ? styles.selectstyle : styles.unselectstyle]}>Environment</Text>
                                </Pressable>

                                

                                </ScrollView>


                            </View>
                            
      
      </View>
                                    {
                                        
                                    this.state.status == 1? 
                                    (<WorkPlan/>)
                                     : 
                                         this.state.status == 2? 
                                         (<Yard/>)
                                         :
                                         this.state.status == 3? 
                                         (<Vessel/>)
                                         :
                                         (<Enviorment />)

                                         
                                    }

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
        color: 'grey',



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


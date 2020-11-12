import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Pressable, ImageBackground, Image,
  StatusBar, TouchableOpacity, Animated
} from 'react-native';
import { Container, Icon, Button, Right, } from 'native-base';
import Statbar from './IndexStatusbar/Statbar';

const { width, height } = Dimensions.get('window')
const slider = [
  { image: require('@Assets/picc.png'), heading: 'Manage Your Task', subheding: 'Organise and simplify your tasks.Collaborate and send Real time Messages' },
  { image: require('@Assets/launch.png'), heading: 'Manage Your Task', subheding: 'Organise and simplify your tasks.Collaborate and send Real time Messages' },
  { image: require('@Assets/launch1.png'), heading: 'Manage Your Task', subheding: 'Organise and simplify your tasks.Collaborate and send Real time Messages' },


];

export default class Launch extends Component {
  scrollX = new Animated.Value(0)
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  async componentDidMount() {
    // StatusBar.setBackgroundColor('#060a4a')
    // StatusBar.setBarStyle( 'light-content',true)
  }

  list = () => {
    return slider.map((item, index) => {
      return (

        <View style={{
          flex: 1, backgroundColor: '#147BDF', justifyContent: 'flex-start',alignItems:'center'
        }} key={index} >
          <View style={{ height: 30, width: "100%", alignContent:'center',}}>
            <Text style={{ textAlign: 'center', color: 'white', padding: 15,
           fontFamily: 'DancingScript',
           fontSize: 50,
           color: 'white' }}>Nivyash</Text>

          </View>

          <View style={{ height: "70%", width: "100%", alignContent:'center',}} >
            <Image source={item.image} style={{
              height: 280,
              width:width,
              resizeMode: 'contain',
              top:140

            }} />


          </View>
         



          <View style={{
            position:'absolute',
             zIndex: 1, 
             width: '100%',
            backgroundColor: 'none',
            alignItems:'center',
         bottom:230
           
          }}>
            <View style={{
              height:40,
           
          
             width: '100%',
            backgroundColor: 'none',
            alignItems:'center',
            justifyContent:'center',
         
          }}>
            <Text style={styles.nameStyle}></Text>
           

</View>
 <View style={{
            height:60,
            zIndex: 1,
            position:'absolute',
             
             width: '60%',
            backgroundColor: 'none',
            alignItems:'center',
            justifyContent:'center',
            top:60
           
           
          }}>
          
            <Text style={styles.title1Style}></Text></View>
          </View>

        </View>
       


      );
    });
  };


  render() {
    let position = Animated.divide(this.scrollX, width);
    return (

      <Container style={{ flex: 1, backgroundColor: '#147BDF', justifyContent: 'center' }}>
        {/* <StatusBar barStyle="light-content" backgroundColor='#147BDF'/> */}
        <Statbar/>


        <View style={{
          justifyContent: 'space-between', flexDirection: 'row', position: 'absolute',
          zIndex: 1, top: 20, paddingHorizontal: 15, width: '100%'
        }}>




          {/* <Text style={styles.headerStyle}>CineGold</Text> */}


        </View>
        {/* <ScrollView> */}
        {/* <View > */}
        <View style={{ flex: 1 }}>
          
            <ScrollView style={{ height: '100%', width: '100%' }}
              horizontal={true}
              pagingEnabled={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
              )}
              scrollEventThrottle={16}
            >
              {this.list()}

            </ScrollView>
       
        </View>

        <View
          style={{
            flexDirection: 'row', position: 'absolute', bottom: 100, height: 10,
            alignSelf: 'center', marginLeft: 18,justifyContent:'center',alignItems:'center'
          }}
        >
          {slider.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity, height: 10, width: 10, backgroundColor: 'white',
                  margin: 5, borderRadius:20,
                }}
              />
            );
          })}
        </View>


        <View style={{
          position: 'absolute', zIndex: 1, alignSelf: 'center', justifyContent: 'center',
          bottom: 20, height: 60,flexDirection:'row',width:'100%',
        }}>

          <TouchableOpacity style={{height: 55, width:(width/2)-50,
    backgroundColor: '#2dd8cf',marginLeft:35,
    color: 'white',}}
             onPress={() => this.props.navigation.navigate('Login',{status:true})}
            >

            <Text style={{ textAlign: 'center', color: 'white', padding: 15,
           fontFamily: 'Poppins-Medium',
           fontSize: 18,
           color: 'white' }} >Login</Text>

          </TouchableOpacity>
          <View style={{height:55,width:30,backgroundColor:'#147BDF'}}>

          </View>
        

          {/* <TouchableOpacity style={{height: 55, width:(width/2)-50,
    backgroundColor: '#fb9e00',
    color: 'white'}}
            onPress={() => this.props.navigation.navigate('Login',{status:false})}
            >

            <Text style={{ textAlign: 'center', color: 'white', padding: 15,
           fontFamily: 'Poppins-Medium',
           fontSize: 18,
           color: 'white' }} >Sign Up</Text>

          </TouchableOpacity> */}



        </View>




      </Container>
    );
  }
}



const styles = StyleSheet.create({
  // viewStyle: {
  //     position: 'absolute',
  //     // flexDirection:'row',
  //     // justifyContent:'space-evenly',

  // },

  headerStyle: {

    color: '#85C1E9',
    //elevation: 8,
    fontSize: 18,
    fontWeight: 'bold',
    // paddingHorizontal:15
  },
  signtitleStyle: {

    color: '#fff',
    fontSize: 12,
    // paddingHorizontal:10
    marginRight: 15


  },
  browsetitle1Style: {

    color: '#fff',
    fontSize: 12,
    //  paddingHorizontal:15
  },

  nameStyle: {

    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: 'white',
    textAlign:'center'

  },


  titleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'white',
    textAlign:'center'
    // paddingHorizontal:15
  },

  title1Style: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    textAlign:'center'
    // paddingHorizontal:15,
    // marginVertical:4



  },

  buttonStyle: {

    borderRadius: 3,

    //alignSelf: 'center',

    height: 55, width: 280,
    backgroundColor: '#85C1E9',
    color: 'white'

  },
  loaderContainer: {

    flex: 1
    // paddingHorizontal:15
  },

})

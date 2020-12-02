import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class YardColName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 80,justifyContent:'center',borderWidth:1,}}>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120, }}>

  <Text numberOfLines={2}
    style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold',padding:5 }}>
    Grading
  </Text>

</View>





<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' ,padding:5}}>
    Photos
  </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold', marginLeft: 20,padding:5 }}>
    Nivyash Remarks



                        </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold',padding:5 }}>
    Yard Actions
  </Text>

</View>

</View>
      </View>
    );
  }
}

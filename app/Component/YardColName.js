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

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, }}>

  <Text numberOfLines={2}
    style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold', }}>
    Grading
  </Text>

</View>





<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
    Photos
  </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold', marginLeft: 20 }}>
    Nivyash Remarks



                        </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

  <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
    Yard Actions
  </Text>

</View>

</View>
      </View>
    );
  }
}

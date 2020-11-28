import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WorkColName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100,borderWidth:1,borderRadius:15}}>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

    <Text numberOfLines={2}
        style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold', }}>
        Yes/No/Na
    </Text>

</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

    <Text numberOfLines={3}
        style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
        RA/JHA Prepared-HKC 3.3.3

    </Text>




</View>

<View style={{
    justifyContent: 'center', alignItems: 'center', alignSelf: 'center',
    width: 100
}}>

    <Text numberOfLines={2}
        style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
        Permit made

    </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

    <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
        Subject covered in tool box briefing


    </Text>


</View>

<View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
        Photos

    </Text>



</View>

<View style={{ justifyContent: 'center', alignItems: 'center',alignSelf: 'center', width: 100 }}>

    <Text style={{ fontFamily: 'Changa-Medium', fontSize: 13, fontWeight: 'bold' }}>
        Remarks


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

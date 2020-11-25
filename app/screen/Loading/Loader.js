import React, { Component } from 'react';
import { View, Text,Image,Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
       <Image
       source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCktpAd66F3WCEyIv58w2oNXpx7uhefMg4QQ&usqp=CAU'}}
        style={{flex:1}}
      />
           
       
      </View>
    );
  }
}

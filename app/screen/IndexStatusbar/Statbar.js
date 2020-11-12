import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';

export default class Statbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor='#147BDF'/>
      </View>
    );
  }
}

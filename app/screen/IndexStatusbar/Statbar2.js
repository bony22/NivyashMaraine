import React, { Component } from 'react';
import { View, Text,StatusBar} from 'react-native';

export default class Statbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor='white' />
      </View>
    );
  }
}

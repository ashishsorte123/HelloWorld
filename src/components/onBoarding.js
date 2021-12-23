import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class onBoarding extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }
  render() {
    return (
      <View>
        <Text>On Boarding Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default onBoarding;

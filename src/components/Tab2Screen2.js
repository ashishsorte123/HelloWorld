import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Tab2Screen2 extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }
  render() {
    return (
      <View>
        <Text>Tab 2 Screen 2</Text>
      </View>
    );
  }
}

export default Tab2Screen2;

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class NextScreen extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }
  render() {
    return (
      <View>
        <Text>This is the next screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text>Let's go back !!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NextScreen;

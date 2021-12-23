import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';

class SplashScreen extends Component {
  componentDidMount() {
    this.props.getImageListFromAPI(this.props.navigation);
  }
  render() {
    return (
      <View>
        <Text>Welcome to My App</Text>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
}

export default connect(null, {getImageListFromAPI})(SplashScreen);

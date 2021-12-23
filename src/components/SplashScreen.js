import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';
import AsyncStore from '../extras/AsyncStore';

class SplashScreen extends Component {
  componentDidMount() {
    const asyncStore = new AsyncStore();
    asyncStore.storeData('OpenTimes', '0');
    asyncStore
      .getData('openTimes')
      .then(value => console.log('Open times value:', value));
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

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {getImageListFromAPI})(SplashScreen);

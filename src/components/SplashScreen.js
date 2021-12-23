import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';
import AsyncStore from '../extras/AsyncStore';

class SplashScreen extends Component {
  componentDidMount() {
    const asyncStore = new AsyncStore();
    asyncStore.getData('openTimes').then(value => {
      console.log('VALUE', value);
      if (value) {
        console.log(
          'Opening 2nd time or later so value is created in async store during first time ',
          this.props.getImageListFromAPI(this.props.navigation),
        );
      } else {
        console.log(
          'Opening first time so no value is store in async store !!!',
        );
        asyncStore.storeData('openTimes', '1');
        this.props.navigation.navigate('onBoarding');
      }
    });

    // this.props.getImageListFromAPI(this.props.navigation);
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

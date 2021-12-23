import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';

class onBoarding extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
    this.props.getImageListFromAPI(this.props.navigation);
  }
  render() {
    return (
      <View>
        <Text>On Boarding Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.getImageListFromAPI(this.props.navigation)}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {getImageListFromAPI})(onBoarding);

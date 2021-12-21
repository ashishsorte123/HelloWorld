import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class ImageDetailsScreen extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }
  render() {
    return (
      <View>
        <Text>
          Image details to be displayed on this page for image ID:
          {this.props.route.params.image_id}
        </Text>
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

export default ImageDetailsScreen;

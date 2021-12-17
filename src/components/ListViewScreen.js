import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {imageSearchBoxValueChanged, getImageListFromAPI} from '../actions';
import {ListCard, TextField} from './common';
import axios from 'axios';

class ListViewScreen extends Component {
  state = {
    imageList: [],
    showLoader: false,
  };
  renderLoader() {
    if (this.state.showLoader) {
      return (
        <ActivityIndicator
          size="large"
          color="green"
          style={styles.loaderStyle}
        />
      );
    }
  }
  getImagesAPICall() {
    this.setState({
      showLoader: true,
    });
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        console.log(response.data);
        this.setState({
          showLoader: false,
        });
        this.setState({
          imageList: response.data,
        });
      })
      .catch(error => {
        this.setState({
          showLoader: false,
        });
        console.log(error);
      });
  }
  componentDidMount() {
    // this.getImagesAPICall();
    // console.log(this.props);
    this.props.getImageListFromAPI();
  }
  render() {
    const {ViewStyle, HeaderViewStyle} = styles;
    {
      this.getImagesAPICall;
    }
    return (
      <View style={ViewStyle}>
        <View style={HeaderViewStyle}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Image Gallery
          </Text>
        </View>
        <TextField
          placeholder="Search"
          onChangeText={value => {
            // console.log('Value of text input changed to:', value);
            this.props.imageSearchBoxValueChanged(value);
          }}
          value={this.props.image_search_value}
          // style={{borderColor: 'pink', width: '90%'}}
        />
        <FlatList
          //   data={this.state.imageList}
          data={this.props.image_list}
          renderItem={item => {
            // console.log(item, item.item, item.item.owner)
            return (
              <ListCard
                image={item.item.download_url}
                ownerName={item.item.author}
              />
            );
          }}
        />
        {this.renderLoader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#291d1d',
    flex: 1,
  },
  HeaderViewStyle: {
    backgroundColor: '#9C3940',
    height: 72,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = state => {
  return {
    image_search_value: state.imageListing.image_search,
    image_list: state.imageListing.image_list,
  };
};

export default connect(mapStateToProps, {
  imageSearchBoxValueChanged,
  getImageListFromAPI,
})(ListViewScreen);

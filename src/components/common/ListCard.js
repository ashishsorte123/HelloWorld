import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

class ListCard extends Component {
  render() {
    const {ImageStyle, CardStyle, TextViewStyle, DownloadButtonStyle} = styles;
    const {image, ownerName, detailsOnPress} = this.props;
    return (
      <View style={CardStyle}>
        <Image style={ImageStyle} source={{uri: image}} />
        <View style={TextViewStyle}>
          <Text style={{color: 'black'}}>{ownerName}</Text>
        </View>
        <TouchableOpacity
          style={DownloadButtonStyle}
          // onPress={() => {
          //   Alert.alert('Download Button Pressed!');
          // }}>
          onPress={detailsOnPress}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            View Details !!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    height: 300,
    width: '96%',
    borderRadius: 8,
    marginTop: '2%',
  },
  CardStyle: {
    backgroundColor: '#ECC0B0',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    elevation: 10,
    borderRadius: 10,
  },
  TextViewStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DownloadButtonStyle: {
    backgroundColor: '#0B8717',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

// export default ListCard;
export {ListCard};

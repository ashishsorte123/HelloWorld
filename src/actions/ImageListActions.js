import axios from 'axios';
import {
  IMAGE_SEARCH_BOX_UPDATED,
  UPDATE_IMAGE_LIST,
  TOGGLE_IMAGELIST_LOADER,
  FILTER_IMAGE_LIST,
} from './ActionTypes';

export const imageSearchBoxValueChanged = (image_list, search) => {
  // return {
  //     type: IMAGE_SEARCH_BOX_UPDATED,
  //     payload: search,
  // };

  return dispatch => {
    var filtered_imageList = image_list.filter(function (image_data) {
      return image_data.author.includes(search, 0);
    });
    console.log('FILTERED LIST:', filtered_imageList);
    dispatch({
      type: IMAGE_SEARCH_BOX_UPDATED,
      payload: search,
    });
    dispatch({
      type: FILTER_IMAGE_LIST,
      payload: filtered_imageList,
    });
  };
};

export const toggleImageListLoader = show => {
  console.log('in toggle loader:', show);
  return {
    type: TOGGLE_IMAGELIST_LOADER,
    payload: show,
  };
};

export const getImageListFromAPI = nav => {
  console.log('In get image API');
  return dispatch => {
    dispatch({
      type: TOGGLE_IMAGELIST_LOADER,
      payload: true,
    });
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        // console.log(response.data);
        dispatch({
          type: UPDATE_IMAGE_LIST,
          payload: response.data,
        });
        dispatch({
          type: FILTER_IMAGE_LIST,
          payload: response.data,
        });
        dispatch({
          type: TOGGLE_IMAGELIST_LOADER,
          payload: false,
        });
        console.log('nav:', nav);
        nav.navigate('HomeScreen');
      })
      .catch(error => {
        dispatch({
          type: TOGGLE_IMAGELIST_LOADER,
          payload: false,
        });
        console.log(error);
      });
  };
};

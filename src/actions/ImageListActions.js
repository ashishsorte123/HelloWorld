import axios from 'axios';
import {IMAGE_SEARCH_BOX_UPDATED, UPDATE_IMAGE_LIST} from './ActionTypes';

export const imageSearchBoxValueChanged = search => {
  return {
    type: IMAGE_SEARCH_BOX_UPDATED,
    payload: search,
  };
};

export const getImageListFromAPI = () => {
  return dispatch => {
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        console.log(response.data);
        dispatch({
          type: UPDATE_IMAGE_LIST,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

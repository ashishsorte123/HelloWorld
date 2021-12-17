import {
  IMAGE_SEARCH_BOX_UPDATED,
  UPDATE_IMAGE_LIST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  image_search: 'Hello World',
  image_list: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case IMAGE_SEARCH_BOX_UPDATED:
      return {...state, image_search: action.payload};
    case UPDATE_IMAGE_LIST:
      return {...state, image_list: action.payload};
    default:
      return state;
  }
};

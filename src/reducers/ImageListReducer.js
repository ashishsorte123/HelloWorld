import {
  IMAGE_SEARCH_BOX_UPDATED,
  UPDATE_IMAGE_LIST,
  TOGGLE_IMAGELIST_LOADER,
  FILTER_IMAGE_LIST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  image_search: '',
  image_list: [],
  filtered_image_list: [],
  showLoader: false,
};

export default (state = INITIAL_STATE, action) => {
//   console.log(action);
  switch (action.type) {
    case IMAGE_SEARCH_BOX_UPDATED:
      return {...state, image_search: action.payload};
    case UPDATE_IMAGE_LIST:
      return {...state, image_list: action.payload};
    case FILTER_IMAGE_LIST:
      return {...state, filtered_image_list: action.payload};
    case TOGGLE_IMAGELIST_LOADER:
      return {...state, showLoader: action.payload};
    default:
      return state;
  };
};

// export const GET_DETIALS = "GET_DETIALS";
// export const POST_DETIALS = "POST_DETIALS";

import {
  GET_DETIALS,
  POST_DETIALS,
  UPDATE_DETIALS,
  DEL_DETIALS,
} from "../Crud/Type";

const intialState = {
  details: [],
  isResponse: false,
  isUpdate: false,
  isDELETEResponse: false,
};

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_DETIALS:
      return {
        details: action.payload,
      };
    case POST_DETIALS:
      return {
        isResponse: action.payload,
      };
    case UPDATE_DETIALS:
      return {
        isUpdate: action.payload,
      };
    case DEL_DETIALS:
      return {
        isDELETEResponse: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;

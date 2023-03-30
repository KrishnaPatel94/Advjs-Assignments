import {
  GET_DETIALS,
  POST_DETIALS,
  UPDATE_DETIALS,
  DEL_DETIALS,
} from "../Crud/Type";
import {
  GetApiDetails,
  PostApiDetails,
  UpdateApiDetails,
  DelApiDetails,
} from "../Api/AxiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log(res);
      dispatch({
        type: "GET_DETIALS",
        payload: res.data,
      });
    });
  };
};
const PostApiAction = (request) => {
  return function (dispatch) {
    return PostApiDetails(request).then((res) => {
      console.log("responce post called....", res);
      dispatch({
        type: "POST_DETIALS",
        payload: "",
      });
    });
  };
};

const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: "UPDATE_DETIALS",
      payload: false,
    });

    return UpdateApiDetails(request, id).then((res) => {
      console.log("responce post called....", res);
      dispatch({
        type: "UPDATE_DETIALS",
        payload: true,
      });
    });
  };
};
const DelApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: "DEL_DETIALS",
      payload: false,
    });
    return DelApiDetails(id).then((res) => {
      console.log("responce post called....", res);
      dispatch({
        type: "DEL_DETIALS",
        payload: true,
      });
    });
  };
};
export { GetApiAction, PostApiAction, UpdateApiAction, DelApiAction };

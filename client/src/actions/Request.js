import * as api from "./../api/API";
import { displayMessage } from "./Message";

export const setOwnRequest = () => async (dispatch) => {
  try {
    const { data } = await api.getOwnRequest();

    const { request } = await data;

    dispatch({ type: "SET_OWN_REQUEST", payload: request });
  } catch (e) {
    console.log(e.message);
  }
};

export const setOtherRequest = () => async (dispatch) => {
  try {
    const { data } = await api.getOtherRequest();

    const { request } = await data;

    dispatch({ type: "SET_OTHER_REQUEST", payload: request });
  } catch (e) {
    console.log(e.message);
  }
};

export const setRecentRequest = () => async (dispatch) => {
  try {
    const { data } = await api.getRecentRequest();

    const { request } = await data;

    dispatch({ type: "SET_RECENT_REQUEST", payload: request });
  } catch (e) {
    console.log(e.message);
  }
};

export const createRequest = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createRequest(formData);

    const { message } = await data;

    dispatch(setOwnRequest());
    dispatch(displayMessage(message));
  } catch (e) {
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ? error : "Something wrong"));
  }
};

export const updateRequest = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.updateRequest(formData, id);

    const { message } = await data;

    dispatch(setOwnRequest());
    dispatch(displayMessage(message));
  } catch (e) {
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ? error : "Something wrong"));
  }
};
export const deleteRequest = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteRequest(id);

    const { message } = await data;

    dispatch(displayMessage(message));
    dispatch(setOwnRequest());
  } catch (e) {
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ? error : "Something wrong"));
  }
};

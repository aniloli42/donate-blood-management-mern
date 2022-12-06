import * as api from "./../api/API";
import { displayLoader } from "./Loader";
import { displayMessage } from "./Message";

export const getHistorys = () => async (dispatch) => {
  try {
    const { data } = await api.getHistorys();

    const { history } = await data;

    dispatch({ type: "GET_HISTORYS", payload: history });
  } catch (e) {
    console.error(e.message);
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ?? "Something Went Wrong!"));
  }
};

export const createHistory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createHistory(formData);
    const { message } = await data;
    dispatch(getHistorys());
    dispatch(displayMessage(message));
  } catch (e) {
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ?? "Something Went Wrong!"));
  }
};

export const deleteHistory = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteHistory(id);
    const { message } = await data;
    dispatch(getHistorys());
    dispatch(displayLoader(false));
    dispatch(displayMessage(message));
  } catch (e) {
    dispatch(displayLoader(false));
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ?? "Something Went Wrong!"));
  }
};

export const updateHistory = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.updateHistory(formData, id);
    const { message } = await data;
    dispatch(displayMessage(message));
    dispatch(getHistorys());
    dispatch({ type: "DELETE_HISTORY" });
  } catch (e) {
    const error = e.response?.data?.message;
    dispatch(displayMessage(error ?? "Something Went Wrong!"));
  }
};

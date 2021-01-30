import axios from "axios";
import {
  STOCK_FAIL,
  STOCK_SUCCESS,
  REQUEST_STOCK,
} from "../constants/stockConstants";

export const getStockDetails = (ticker) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_STOCK,
    });

    const { data } = await axios.get();

    dispatch({
      type: STOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: STOCK_FAIL,
      payload: message,
    });
  }
};

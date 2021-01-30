import axios from "axios";
import {
  STOCK_FAIL,
  STOCK_SUCCESS,
  REQUEST_STOCK,
} from "../constants/stockConstants";
const apiKey = process.env.REACT_APP_POLYGON_KEY;

export const getStockDetails = (tick) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_STOCK,
    });

    const { data } = await axios.get(
      `https://api.polygon.io/v2/aggs/ticker/${tick}/prev?unadjusted=true&apiKey=${apiKey}`
    );

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

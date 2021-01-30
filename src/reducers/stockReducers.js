import {
  STOCK_FAIL,
  STOCK_SUCCESS,
  REQUEST_STOCK,
} from "../constants/stockConstants";

export const getStockReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_STOCK:
      return { loading: true };
    case STOCK_SUCCESS:
      return { loading: false, stocks: action.payload };
    case STOCK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

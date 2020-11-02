import { UPDATE_NUM } from "./types";

export const updateNum = (number) => (dispatch) => {
  dispatch({ type: UPDATE_NUM, payload: number});
};


import { UPDATE_NUM } from "../actions/types";


function numberReducer(state = 0, action) {
  switch (action.type) {
    case UPDATE_NUM:
        return action.payload
    default:
      return state;
  }
}

export default numberReducer;
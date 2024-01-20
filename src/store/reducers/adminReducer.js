import { getAdmin } from "../../utils/authToken";
import { STORE_ADMIN } from "../actions";

const initialState = {
  admin: getAdmin() || {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;

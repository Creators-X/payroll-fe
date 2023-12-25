const initialState = {
  showOldPass: false,
  showNewPass: false,
  showConfirmPass: false,
  state: "settings",
  oldPass: "",
  newPass: "",
  confirmPass: "",
  showStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleOldPass":
      return {
        ...state,
        showOldPass: !state.showOldPass,
      };
    case "toggleNewPass":
      return {
        ...state,
        showNewPass: !state.showNewPass,
      };
    case "toggleConfirmPass":
      return {
        ...state,
        showConfirmPass: !state.showConfirmPass,
      };

    case "toggleState":
      return {
        ...state,
        state: action.payload,
      };
    case "oldPass":
      return {
        ...state,
        oldPass: action.payload,
      };
    case "newPass":
      return {
        ...state,
        newPass: action.payload,
      };
    case "confirmPass":
      return {
        ...state,
        confirmPass: action.payload,
      };
    case "showStatus":
      return {
        ...state,
        showStatus: action.payload,
      };
    default:
      return state;
  }
};

export { reducer, initialState };

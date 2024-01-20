import {
  ACCT_NO,
  ACCT_NO_ERR,
  ADD_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_LOADING,
  ADD_EMPLOYEE_SUCCESS,
  ALLEMPLOYEE_FAIL,
  ALLEMPLOYEE_SUCCESS,
  CLOSE_MODAL,
  GET_BANK,
} from "../actions";

const initialState = {
  employees: [],
  loading: true,
  error: "",
  adding: false,
  newEmployee: {},

  addingError: {},
  firstname: "",
  lastname: "",
  position: "",
  email: "",
  phoneNumber: "",
  salary: "",
  bonus: "",
  bankCode: "",
  acctName: "",
  acctNo: "",
  acctNoErr: "",
  getBank: false,
};
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLEMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };

    case ALLEMPLOYEE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_EMPLOYEE_LOADING: {
      return { ...state, adding: true };
    }
    case ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        adding: false,
        newEmployee: action.payload,
      };
    }
    case ADD_EMPLOYEE_FAIL: {
      return {
        ...state,
        adding: false,
        addingError: action.payload,
      };
    }
    case ACCT_NO: {
      return {
        ...state,
        acctName: action.payload.account_name,
        getBank: false,
      };
    }
    case ACCT_NO_ERR: {
      return {
        ...state,
        acctNoErr: action.payload,
        acctName: "",
        getBank: false,
      };
    }
    case GET_BANK: {
      return {
        ...state,
        getBank: true,
        acctNoErr: "",
        acctName: "",
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        adding: false,
        newEmployee: {},

        addingError: {},
      };
    }
    case "firstname":
      return {
        ...state,

        firstname: action.payload,
      };
    case "lastname":
      return {
        ...state,
        lastname: action.payload,
      };
    case "position":
      console.log("storing");
      return {
        ...state,
        position: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "salary":
      return {
        ...state,
        salary: action.payload,
      };
    case "bonus":
      return {
        ...state,
        bonus: action.payload,
      };
    case "total":
      return {
        ...state,
        total: action.payload,
      };
    case "bankCode":
      return {
        ...state,
        bankCode: action.payload,
      };
    case "acctName":
      return {
        ...state,
        acctName: action.payload,
      };
    case "acctNo":
      if (state.acctNo.length <= 10) {
        return {
          ...state,
          acctNo: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
};

export default employeeReducer;

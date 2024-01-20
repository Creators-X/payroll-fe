import axios from "axios";
import api from "../../utils/api";
export const ALLEMPLOYEE_SUCCESS = "GET ALL EMPLOYEE SUCCESS";
export const ALLEMPLOYEE_FAIL = "GET ALL EMPLOYEE FAIL";
export const ADD_EMPLOYEE = "GET EMPLOYEE";
export const ADD_EMPLOYEE_FAIL = "GET EMPLOYEE FAIL";
export const ADD_EMPLOYEE_LOADING = "GET EMPLOYEE LOADING";
export const ADD_EMPLOYEE_SUCCESS = "GET EMPLOYEE SUCCESS";
export const CLOSE_MODAL = "CLOSE SUCCESS MODAL";
export const ACCT_NO = "ACCT NUMBER";
export const ACCT_NO_ERR = "ACCT_NO_ERR";
export const GET_BANK = "GET_BANK";
const bankToken = "1dK8500oY5WGoSxiGEZTXGThyzdkeA9fa2EVnZj0c71ca2ca";

export const getEmployees = () => {
  return async (dispatch) => {
    console.log(api);
    try {
      const response = await api.get("/admin/employees");
      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: ALLEMPLOYEE_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ALLEMPLOYEE_FAIL,
        payload: error,
      });
    }
  };
};

export const addEmployee = (payload) => {
  return async (dispatch) => {
    dispatch({ type: ADD_EMPLOYEE_LOADING });
    try {
      const response = await api.post("/admin/create-employee", payload);
      if (response.status === 200) {
        dispatch({
          type: ADD_EMPLOYEE_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_EMPLOYEE_FAIL,
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};

export const getUserBank = (payload, bankCode) => {
  return async (dispatch) => {
    if (payload.length <= 10) {
      console.log("dipatching");
      dispatch({ type: "acctNo", payload });
    }
    if (payload.length === 10 && bankCode) {
      dispatch({
        type: GET_BANK,
      });
      const response = await axios.get(
        `https://nubapi.com/api/verify?account_number=${payload}&bank_code=${bankCode}`,
        {
          headers: {
            Authorization: `Bearer ${bankToken}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        if (!response.data.status) {
          dispatch({ type: ACCT_NO_ERR, payload: response.data.message });
        } else {
          dispatch({ type: ACCT_NO, payload: response.data });
        }
      }
    }
  };
};

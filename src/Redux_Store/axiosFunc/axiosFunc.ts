import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { apiCalls } from "../../utils/api/api";
import { fetchMateriaFromDB } from "../actions/materia_tp";

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await Axios.get(apiCalls.api_materia);
      dispatch(fetchMateriaFromDB(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

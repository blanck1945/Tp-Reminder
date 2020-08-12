import * as materiaType from "../types";
import { MateriaTp, MateriaReducer } from "../../utils/types.d.";
import { MateriaTpActionType, selectActionType } from "../actions/materia_tp";
import { checkTpValue } from "../../utils/func";

const initialstate: MateriaReducer = {
  materias: [],
  selectedMateria: null,
  edit_mode: false,
};

export default (
  state = initialstate,
  action: MateriaTpActionType | selectActionType
) => {
  switch (action.type) {
    case materiaType.FETCH_MATERIAS:
      return {
        ...state,
        materias: action.payload,
      };
    case materiaType.CREATE_MATERIA:
      return {
        ...state,
        materias: [...state.materias, action.payload],
      };
    case materiaType.EDIT_MATERIA:
      return {
        ...state,
        materias: state.materias.map((el: MateriaTp) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case materiaType.TOOGLE_MATERIA:
      return {
        ...state,
        materias: action.payload,
      };
    case materiaType.CHANGE_EDIT_MODE:
      return {
        ...state,
        edit_mode: state.edit_mode === true ? false : true,
      };
    case materiaType.SELECT_MATERIA:
      return {
        ...state,
        selectedMateria: action.payload,
      };
    case materiaType.CHANGE_DONE_NUM:
      return {
        ...state,
        materias: state.materias.map((el: MateriaTp) => {
          return { ...el, tp_done: checkTpValue(el.materia_tp) };
        }),
      };
    case materiaType.CHANGE_MATERIA_STATE:
      return {
        ...state,
        materias: state.materias.filter((el: MateriaTp) =>
          el.id === action.payload.id ? { ...el, state: "Not Active" } : el
        ),
      };

    default:
      return state;
  }
};

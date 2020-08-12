import * as materiaTypes from "../types";
import * as interfaces from "./actions_interfaces/materiaActioninterface";
import { MateriaTp } from "../../utils/types.d.";

interface createMateriaActionType {
  type: typeof materiaTypes.CREATE_MATERIA;
  payload: MateriaTp;
}

interface editMateriaActionType {
  type: typeof materiaTypes.EDIT_MATERIA;
  payload: MateriaTp;
}

interface toogleMateriaActionType {
  type: typeof materiaTypes.TOOGLE_MATERIA;
  payload: MateriaTp[];
}

interface deleteMateriaActionType {
  type: typeof materiaTypes.CHANGE_MATERIA_STATE;
  payload: MateriaTp;
}

interface selectMateriaActionType {
  type: typeof materiaTypes.SELECT_MATERIA;
  payload: MateriaTp;
}

interface changeDoneActionType {
  type: typeof materiaTypes.CHANGE_DONE_NUM;
}

interface changeTpStatusActionType {
  type: typeof materiaTypes.CHANGE_TP_STATUS;
  payload: boolean;
}

interface fetchMateriaActionType {
  type: typeof materiaTypes.FETCH_MATERIAS;
  payload: MateriaTp[];
}

export const createMateriaActionCreator = (
  data: MateriaTp
): createMateriaActionType => ({
  type: materiaTypes.CREATE_MATERIA,
  payload: data,
});

export const editMateriaActionCreator = (
  data: MateriaTp
): editMateriaActionType => ({
  type: materiaTypes.EDIT_MATERIA,
  payload: data,
});

export const toogleMateriaActionCreator = (
  data: MateriaTp[]
): toogleMateriaActionType => ({
  type: materiaTypes.TOOGLE_MATERIA,
  payload: data,
});

export const deleteMateriaActionCreator = (
  data: MateriaTp
): deleteMateriaActionType => ({
  type: materiaTypes.CHANGE_MATERIA_STATE,
  payload: data,
});

export const selectMateriaActionCreator = (
  data: MateriaTp
): selectMateriaActionType => ({
  type: materiaTypes.SELECT_MATERIA,
  payload: data,
});

export const fetchMateriaFromDB = (data: MateriaTp[]) => ({
  type: materiaTypes.FETCH_MATERIAS,
  payload: data,
});

export const changeDoneActionCreator = () => ({
  type: materiaTypes.CHANGE_DONE_NUM,
});

export const changeEditModeActionCreator = (): interfaces.ChangeEditModeActionType => ({
  type: materiaTypes.CHANGE_EDIT_MODE,
});

export type MateriaTpActionType =
  | createMateriaActionType
  | editMateriaActionType
  | toogleMateriaActionType
  | deleteMateriaActionType
  | fetchMateriaActionType
  | changeDoneActionType
  | interfaces.ChangeEditModeActionType;

export type selectActionType = selectMateriaActionType;

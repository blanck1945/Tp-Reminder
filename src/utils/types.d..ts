import { LoginReducer } from "./interfaces/Login_Interface";

export interface TpData {
  tp_number: number;
  tp_status: boolean;
}

export interface MateriaTp {
  id: number | string;
  state: string;
  materia_title: string;
  materia_tp: TpData[];
  profesor: string;
  tp_done: number;
}

interface Counter {
  total_tp: number;
  unfinish_tp: number;
  done_tp: number;
  porcentage?: number;
}

//Exportin Slice states

export interface MateriaReducer {
  materias: MateriaTp[];
  selectedMateria: MateriaTp | null;
  edit_mode: boolean;
}

//Exportin global State Interface

export interface MateriaState {
  materiaReducer: MateriaReducer;
}

export interface ToolkitMateria {
  materiaReducer: MateriaReducer;
  loginReducer: LoginReducer;
}

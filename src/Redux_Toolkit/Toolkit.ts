import {
  createSlice,
  PayloadAction,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { MateriaReducer, TpData } from "../utils/types.d.";
import { MateriaTp } from "../utils/types.d.";
import { checkTpValue } from "../utils/func";
import { NewMateriaModel } from "../components/todo_list/utils/Models";
import { LoginReducer } from "../utils/interfaces/Login_Interface";
import Axios from "axios";
import { apiCalls } from "../utils/api/api";

const materiaInitialState: MateriaReducer = {
  materias: [],
  selectedMateria: null,
  edit_mode: false,
};

const loginInitialState: LoginReducer = {
  user: undefined,
  token: 44,
};

export const fetchMateriaFromAdonis = createAsyncThunk(
  "materias/adonis",
  async () => {
    const { data } = await Axios.get(apiCalls.api_materia);
    setDataFromAdonis(data);
    return data;
  }
);

const materiaSlice = createSlice({
  name: "materia",
  initialState: materiaInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<MateriaTp>) => {
        state.materias.push(payload);
      },
      prepare: (payload: PayloadAction<MateriaTp>) => ({
        payload: {
          ...NewMateriaModel,
        },
      }),
    },
    fetch: (state, { payload }: PayloadAction<MateriaTp[]>) => {
      console.log("Using this route");
      payload;
    },
    edit: (state, { payload }: PayloadAction<MateriaTp>) => {
      let materiaToEdit = state.materias.find(
        (el: MateriaTp) => el.id === payload.id
      );
      if (materiaToEdit) {
        materiaToEdit = payload;
      }
    },
    toogle: (state, { payload }: PayloadAction<MateriaTp[]>) => {
      state.materias = payload;
    },
    updateValue: (state) => {
      const newMateriaArr = state.materias.map((el: MateriaTp) => {
        return { ...el, tp_done: checkTpValue(el.materia_tp) };
      });
      if (newMateriaArr) {
        state.materias = newMateriaArr;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const materiaToRemove = state.materias.find((el: MateriaTp) => {
        el.id === payload.id;
      });
      if (materiaToRemove) {
        materiaToRemove.state = "Not Active";
        //state.splice(materiaToRemove.id, 1)
      }
    },
    toogleEdit: (state) => {
      state.edit_mode = !state.edit_mode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMateriaFromAdonis.fulfilled, (state, action) => {
      state.materias.push(action.payload);
    });
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {},
});

export const {
  create: createMateriaActionCreator,
  edit: editMateriaActionCreator,
  remove: deleteMateriaActionCreator,
  fetch: setDataFromAdonis,
  toogle: toogleTpState,
  toogleEdit: toogleEditMode,
  updateValue: updateTpValues,
} = materiaSlice.actions;

const globalReducers = {
  materiasReducer: materiaSlice.reducer,
  loginReducer: loginSlice.reducer,
};

export default configureStore({
  reducer: globalReducers,
});

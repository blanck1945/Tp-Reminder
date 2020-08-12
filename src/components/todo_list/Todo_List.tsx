import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux_Store/axiosFunc/axiosFunc";
import { MateriaState, MateriaTp, TpData } from "../../utils/types.d.";
import Materia_Template from "./materia_template/Materia_Template";
import Materia_Display from "./materia_display/Materia_Display";

import {
  toogleMateriaActionCreator,
  selectMateriaActionCreator,
  changeDoneActionCreator,
} from "../../Redux_Store/actions/materia_tp";

import "./Todo_list.scss";
import { NewMateriaModel } from "./utils/Models";
import Redux_Banner from "../../layouts/redux_banner/Redux_Banner";

const Todo_List = () => {
  const dispatch = useDispatch();

  const { materias } = useSelector(
    (state: MateriaState) => state.materiaReducer
  );

  const changeStatus = (id: number, tp_id: number, mode: boolean) => {
    const [data] = materias.filter((el: MateriaTp) => el.id === id);

    const newData = data.materia_tp.map((tp: TpData) =>
      tp.tp_number === tp_id ? { ...tp, tp_status: !mode } : tp
    );

    const newMateriaArr = materias.map((el: MateriaTp) =>
      el.id === id ? { ...el, materia_tp: newData } : el
    );

    dispatch(toogleMateriaActionCreator(newMateriaArr));
    dispatch(changeDoneActionCreator());
    const [updateData] = newMateriaArr.filter(
      (el: MateriaTp) => el.id === data.id
    );
    const newValue = updateData.materia_tp.filter(
      (el: TpData) => el.tp_status === true
    );

    setMateria({ ...updateData, tp_done: newValue.length });
  };

  const setMateria = (el: MateriaTp) => {
    dispatch(selectMateriaActionCreator(el));
  };

  React.useEffect(() => {
    if (materias !== undefined) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className="todo_list">
      <Redux_Banner active={true} />
      <div className="todo_box">
        <div className="todo_active">
          <h3 className="todo_title">Materias Activas</h3>
          <div className="materia_box">
            <Materia_Display
              materias={materias}
              setMateria={setMateria}
              changeStatus={changeStatus}
            />
          </div>
        </div>
        <div className="todo_active">
          <h3 className="todo_title">Opciones y modificaciones</h3>
          {materias.map((el: MateriaTp) => (
            <Materia_Template key={el.id} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo_List;

import * as React from "react";
import { MateriaTp, MateriaState } from "../../../utils/types.d.";

import "./Materia_Template.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeEditModeActionCreator } from "../../../Redux_Store/actions/materia_tp";

interface MateriaProps {
  data: MateriaTp;
}

const Materia_Template = ({ data }: MateriaProps) => {
  const dispatch = useDispatch();
  const { edit_mode } = useSelector(
    (state: MateriaState) => state.materiaReducer
  );

  const handleInput = (value: string) => {
    console.log(value);
  };

  const changeEditMode = () => {
    dispatch(changeEditModeActionCreator());
  };
  return (
    <div className="materia_template">
      {!edit_mode ? (
        <h3>Nombre: {data.materia_title}</h3>
      ) : (
        <input
          type="text"
          className="input_type"
          value={data.materia_title}
          onChange={(e) => handleInput(e.target.value)}
        />
      )}
      {!edit_mode ? (
        <h3>Profesor:{data.profesor}</h3>
      ) : (
        <input
          type="text"
          className="input_type"
          value={data.profesor}
          onChange={(e) => handleInput(e.target.value)}
        />
      )}
      <h3>Periodo: 3-A</h3>
      <h3>Cantidad de Tp: 4</h3>
      <h3>Tp Realizados: {data.tp_done}</h3>
      <h3>Estado: {data.state}</h3>
      <h3>Fin de Cursada: 5/10/2020</h3>
      <div className="operation_box">
        {edit_mode ? (
          <>
            <button className="operation_btn">Actualizar</button>
            <button className="operation_btn" onClick={() => changeEditMode()}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button className="operation_btn" onClick={() => changeEditMode()}>
              Editar
            </button>
            <button className="operation_btn">Cambiar Estado</button>
            <button className="operation_btn">Eliminar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Materia_Template;

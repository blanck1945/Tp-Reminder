import * as React from "react";
import { MateriaTp, TpData, MateriaState } from "../../../utils/types.d.";
import { useSelector } from "react-redux";

interface MateriaDisplay {
  materias: MateriaTp[];
  setMateria: Function;
  changeStatus: Function;
}

const Materia_Display = ({
  materias,
  setMateria,
  changeStatus,
}: MateriaDisplay) => {
  return (
    <>
      {materias
        ? materias.map((el: MateriaTp) => (
            <div className="materia_item" key={el.id}>
              <h4 className="materia_data">Materia ID: {el.id}</h4>
              <div className="title_box">
                <h3 className="materia_title" onClick={() => setMateria(el)}>
                  {el.materia_title}
                </h3>
              </div>
              <h4 className="materia_data">Estado: {el.state}</h4>
              <div className="title_box">
                {el.materia_tp.map((tp: TpData, index: number) =>
                  tp.tp_status === false ? (
                    <div className="materia_box" key={tp.tp_number}>
                      <h3 className="materia_red">{index + 1}: Sin terminar</h3>
                      <button
                        className="complete_btn"
                        onClick={() =>
                          changeStatus(el.id, tp.tp_number, tp.tp_status)
                        }
                      >
                        Cambiar
                      </button>
                    </div>
                  ) : (
                    <div className="materia_box">
                      <h3 className="materia_verde">{index + 1}: Completo</h3>
                      <button
                        className="complete_btn"
                        onClick={() =>
                          changeStatus(el.id, tp.tp_number, tp.tp_status)
                        }
                      >
                        Cambiar
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Materia_Display;

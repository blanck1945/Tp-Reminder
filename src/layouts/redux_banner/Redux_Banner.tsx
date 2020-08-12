import * as React from "react";

import "./Redux_Banner.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewMateriaModel } from "../../components/todo_list/utils/Models";
import { MateriaTp } from "../../utils/types.d.";
import { createMateriaActionCreator } from "../../Redux_Store/actions/materia_tp";
import { useDispatch } from "react-redux";

type FormValues = {
  materia: string;
};

interface ReduxBannerProps {
  active: boolean;
}

const Redux_Banner = ({ active }: ReduxBannerProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: any) =>
    postData(data.materia);

  const postData = (data: string) => {
    const materia: MateriaTp = { ...NewMateriaModel, materia_title: data };

    if (active) {
      dispatch(createMateriaActionCreator(materia));
    } else {
      console.log("creating materia");
    }
    reset();
  };
  return (
    <div className="redux_header">
      <h3 className="todo_header">Tp Remainder: Redux vs Toolkit</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="add_form">
        <label className="todo_label">Add ToDo</label>
        <input
          type="text"
          placeholder="Add ToDo"
          className="todo_input"
          name="materia"
          ref={register({ required: true })}
        />
        <button className="add_btn">Add</button>
      </form>
    </div>
  );
};

export default Redux_Banner;

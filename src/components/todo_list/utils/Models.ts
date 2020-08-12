import { MateriaTp } from "../../../utils/types.d.";
import { v4 as uuidv4 } from "uuid";

export const NewMateriaModel: MateriaTp = {
  id: uuidv4(),
  materia_title: "",
  state: "Active",
  materia_tp: [
    {
      tp_number: 1,
      tp_status: false,
    },
    {
      tp_number: 2,
      tp_status: false,
    },
    {
      tp_number: 3,
      tp_status: false,
    },
    {
      tp_number: 4,
      tp_status: false,
    },
  ],
  profesor: "Romina Cafaretto",
  tp_done: 0,
};

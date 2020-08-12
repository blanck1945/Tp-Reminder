import { TpData } from "./types.d.";

export const checkTpValue = (data: TpData[]) => {
  const tp_number = data.filter((el: TpData) => el.tp_status === true);
  return tp_number.length;
};

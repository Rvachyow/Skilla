import { contactProps } from "../../types/contactDataType";
import style from "./TableItem.module.scss";
import { CallStatus } from "../CallStatus/CallStatus";

export const TableItem = ({
  partner_data,
  person_avatar,
  status,
  in_out,
  date,
}: contactProps) => {
  return (
    <tr className={style.tableitem}>
      <td>
        <CallStatus code={in_out} status={status} />
      </td>
      <td>{date.slice(10, 16)}</td>
      <td className={style.avatar}>
        <img src={person_avatar} alt="" />
      </td>
      <td>+{partner_data.phone}</td>
      <td>{partner_data.name}</td>
      <td>Отлично</td>
      <td>12:06</td>
    </tr>
  );
};

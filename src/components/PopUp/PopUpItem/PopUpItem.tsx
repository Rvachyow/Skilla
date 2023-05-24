import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { filterByTypes } from "../../../redux/slices/contactSlice";
import { BtmFilter } from "../../../types/filterBtn";
import style from "./PopUpItem.module.scss";
export const PopUpItem = ({
  type,
  img,
  text,
  setActivePopUp,
  name,
}: BtmFilter & { setActivePopUp: () => void; name: string }) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("Все типы");
  const daasd = useAppSelector((state) => state.contact.filtred);

  const filterHandle = () => {
    dispatch(filterByTypes({ type: type }));
    setActivePopUp();
    setActive(name);
  };

  return (
    <div className={style.popUpItem}>
      <div onClick={filterHandle} className={style.container}>
        <img src={img} alt="" />
        <h5>{text}</h5>
      </div>
    </div>
  );
};

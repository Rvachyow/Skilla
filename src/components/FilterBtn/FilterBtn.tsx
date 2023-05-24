import { FilterProps } from "../../types/filterBtn";
import style from "./FilterBtn.module.scss";
import { useState, useRef } from "react";
import { PopUpItem } from "../PopUp/PopUpItem/PopUpItem";

export const FilterBtn = ({ name, btn, path }: FilterProps) => {
  const [activePopUp, setActivePopUp] = useState(false);
  const refPopup = useRef(null);

  const handleActivePopUp = () => {
    if (!activePopUp) {
      document.body.addEventListener("click", handleOutSideClick);
      setActivePopUp(!activePopUp);
      return;
    }
    setActivePopUp(!activePopUp);
  };
  const handleOutSideClick = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(refPopup.current)) {
      setActivePopUp(false);
      document.body.removeEventListener("click", handleOutSideClick);
    }
  };
  const handleExit = () => {
    setActivePopUp(!activePopUp);
  };
  return (
    <div ref={refPopup} onClick={handleActivePopUp} className={style.sortbtn}>
      {activePopUp ? (
        <div className={style.popup}>
          <div className={style.popupTitle}>{name}</div>
          {btn?.map((item) => (
            <PopUpItem
              name={name}
              setActivePopUp={handleExit}
              {...item}
            ></PopUpItem>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className={style.filterName}>{name}</div>
      <img src="./assets/icons/V.svg" alt="" />
    </div>
  );
};

import style from "./Sidebar.module.scss";
import { NAV_ITEM } from "../../constants/navbarConstant";
import { Sidebaritem } from "./SidebarItem/Sidebaritem";
import { useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState("call");

  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__container}>
        <div className={style.sidebar__logo}>
          <img src="./assets/icons/Logo.svg" alt="" />
        </div>
        <div className={style.menu}>
          {NAV_ITEM?.map((item) => (
            <Sidebaritem
              {...item}
              active={active === item.path}
              key={item.name}
              setActive={setActive}
            />
          ))}
        </div>
        <div className={style.sidebar__button}>
          <button>
            <h3>Добавить заказ</h3>
            <img
              className={style.menu__img}
              src="./assets/icons/Plus.svg"
              alt=""
            />
          </button>
          <button>
            <h3>Oплата</h3>
            <img
              className={style.menu__img}
              src="./assets/icons/Pay.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

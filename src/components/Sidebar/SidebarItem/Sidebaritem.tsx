import { NavProps } from "../../../types/nav";
import style from "./Sidebaritem.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Sidebaritem = ({
  name,
  img,
  path,
  active,
  setActive,
}: NavProps & { active: boolean; setActive: (state: string) => void }) => {
  const activeHandle = () => {
    setActive(path);
  };

  return (
    <Link to={path}>
      <div
        onClick={activeHandle}
        className={clsx(style.sidebaritem, {
          [style.sidebaritemActive]: active,
        })}
      >
        <div
          className={clsx(style.container, { [style.containerActive]: active })}
        >
          <div className={style.container__item}>
            {img}
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

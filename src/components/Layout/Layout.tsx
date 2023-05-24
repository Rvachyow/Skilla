import { Sidebar } from "../Sidebar/Sidebar";
import style from "./Layout.module.scss";
import React from "react";

export const Layout = ({
  children,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      {children}
    </div>
  );
};

import style from "./Call.module.scss";
import { UserBar } from "../../components/UserBar/UserBar";
import { Tables } from "../../components/Tables/Tables";
import { useAppDispatch } from "../../redux/hook";
import { useEffect } from "react";
import { getContacts } from "../../redux/slices/contactSlice";

export const Call = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={style.call}>
      <UserBar></UserBar>
      <Tables></Tables>
    </div>
  );
};

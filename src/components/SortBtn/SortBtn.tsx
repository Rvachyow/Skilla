import style from "./SortBtn.module.scss";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { sortBy } from "../../redux/slices/contactSlice";
import { SortProps } from "../../types/sortBtn";

export const SortBtn = ({ name, path }: SortProps ) => {
    const [ sorted, setSorted ] = useState(false);
    const dispatch = useAppDispatch();
    const sortHandle = () => {
        dispatch(sortBy({sortType: path, sorted: sorted}));
        setSorted(!sorted);
    };
    return <th className={style.sortbtn} onClick={sortHandle}>{name}</th>;
};
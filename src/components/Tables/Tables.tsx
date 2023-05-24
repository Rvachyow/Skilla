import style from "./Tables.module.scss";
import { FilterBtn } from "../FilterBtn/FilterBtn";
import { FILTR_BTN } from "../../constants/filterBtnConstant";
import { TableItem } from "../TableItem/TableItem";
import { useAppSelector } from "../../redux/hook";
import { contactProps } from "../../types/contactDataType";
import { SortBtn } from "../SortBtn/SortBtn";
import { SORT_BTN } from "../../constants/sortBtnConstant";

export const Tables = () => {
  const contactTableDate = useAppSelector((state) => state.contact.filtred);

  return (
    <div className={style.tables}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.info__balance}>
            <p className={style.text}>Баланс:</p>
            <p className={style.number}>272 ₽ </p>
            <img src="./assets/icons/balanc.svg" alt="" />
          </div>
          <div className={style.info__day}>
            <img src="./assets/icons/next.svg" alt="" />
            <div className={style.infoLogo}>
              <img src="./assets/icons/calendar.svg" alt="" />
              <p>3 Дня</p>
            </div>
            <img
              className={style.before}
              src="./assets/icons/next.svg"
              alt=""
            />
          </div>
        </div>
        <div className={style.tables__filter}>
          <div className={style.tables__search}>
            <img src="./assets/icons/search.svg" alt="" />
            <input placeholder="Поиск по звонкам" type="text" />
          </div>
          <div className={style.tables__buttons}>
            {FILTR_BTN?.map((item) => (
              <FilterBtn {...item} key={item.name} />
            ))}
          </div>
        </div>
        <div className={style.tables__table}>
          <table>
            <thead>
              <tr className={style.table__tr}>
                {SORT_BTN?.map((item) => (
                  <SortBtn key={item.path} {...item} />
                ))}
              </tr>
            </thead>
            <tbody>
              {contactTableDate?.map((item: contactProps) => (
                <TableItem {...item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

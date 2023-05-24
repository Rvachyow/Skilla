import useDate from "../../hooks/useDate";
import style from "./UserBar.module.scss";
export const UserBar = () => {
  const { dateNum, mouth, day } = useDate();

  return (
    <div className={style.userbar}>
      <div className={style.container}>
        <div className={style.userbar_items}>
          <div className={style.date}>
            {dateNum}, {day} {mouth}
          </div>
          <div className={style.stats}>
            <div className={style.newCall}>
              <span>
                <p>Новые звонки</p>
                <p className={style.greenT}>20 из 30 шт</p>
              </span>
              <div className={style.line}>
                <div className={style.green}></div>
              </div>
            </div>
            <div className={style.callQuality}>
              <span>
                <p>Качество разговоров</p>
                <p className={style.yellowT}>40%</p>
              </span>
              <div className={style.line}>
                <div className={style.yellow}></div>
              </div>
            </div>
            <div className={style.converOrder}>
              <span>
                <p>Конверсия в заказ</p>
                <p className={style.redT}>67%</p>
              </span>
              <div className={style.line}>
                <div className={style.red}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.userData}>
          <div className={style.userInfo}>
            <div className={style.userInfo__search}>
              <img src="./assets/icons/search.svg" alt="" />
            </div>
          </div>
          <div className={style.userInfo__date}>
            <p>ИП Сидорова Александра Михайловна</p>
            <img className={style.v} src="./assets/icons/V.svg" alt="" />
          </div>
          <div className={style.userSettings}>
            <img className={style.avatar} src="./assets/avatar.svg" alt="" />
            <img className={style.v} src="./assets/icons/V.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

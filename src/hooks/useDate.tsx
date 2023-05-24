import { useEffect, useState } from "react";

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const useDate = () => {
  const [date, setDate] = useState({ day: 0, dateNum: "", mouth: "" });
  let myDate = new Date();
  let fullDate = myDate.getDate();
  let fullMouth = months[myDate.getMonth()];
  let fullDays = days[myDate.getDay()];

  const handleDate = () => {
    setDate({
      day: fullDate,
      dateNum: fullDays,
      mouth: fullMouth,
    });
  };
  useEffect(() => {
    handleDate();
  }, []);

  return date;
};
export default useDate;

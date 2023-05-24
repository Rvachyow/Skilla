import { FilterProps } from "../types/filterBtn";

export const FILTR_BTN: FilterProps[] = [
  {
    name: "Все типы",
    path: "in_out",
    btn: [
      { img: "./assets/callStatus/0.svg", type: 0, text: "Входящие" },
      { img: "./assets/callStatus/1.svg", type: 1, text: "Исходящие" },
      { img: "./assets/callStatus/fail.svg", type: 3, text: "Не дозвонился" },
    ],
  },
  {
    name: "Все сотрудники",
    path: ".",
  },
  {
    name: "Все звонки",
    path: ".",
  },
  {
    name: "Все источники",
    path: ".",
  },
  {
    name: "Все оценки",
    path: ".",
  },
  {
    name: "Все ошибки",
    path: ".",
  },
];

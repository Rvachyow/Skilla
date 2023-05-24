import { NavProps } from "../types/nav";
import { DoneSvg } from "../components/SvgApp/DoneSvg";
import { MessagesSvg } from "../components/SvgApp/MessagesSvg";
import { CallSvg } from "../components/SvgApp/CallSvg ";
import { CounterpartiesSvg } from "../components/SvgApp/CounterpartiesSvg";
import { DocsSvg } from "../components/SvgApp/DocsSvg";
import { ReportsSvg } from "../components/SvgApp/ReportsSvg";
import { KnowledgebaseSvg } from "../components/SvgApp/KnowledgebaseSvg";
import { SettingsSvg } from "../components/SvgApp/SettingsSvg";
import { OrderSvg } from "../components/SvgApp/OrderSvg";
import { PerformersSvg } from "../components/SvgApp/PerformersSvg";

export const NAV_ITEM: NavProps[] = [
  {
    name: "Итоги",
    path: ".",
    img: <DoneSvg />,
  },
  {
    name: "Заказы",
    path: "order",
    img: <OrderSvg />,
  },
  {
    name: "Сообщения",
    path: "messages",
    img: <MessagesSvg />,
  },
  {
    name: "Звонки",
    path: "call",
    img: <CallSvg />,
  },
  {
    name: "Контрагенты",
    path: "counterparties",
    img: <CounterpartiesSvg />,
  },
  {
    name: "Документы",
    path: "docs",
    img: <DocsSvg />,
  },
  {
    name: "Исполнители",
    path: "performers",
    img: <PerformersSvg />,
  },
  {
    name: "Отчеты",
    path: "reports",
    img: <ReportsSvg />,
  },
  {
    name: "База знаний",
    path: "knowledge_base",
    img: <KnowledgebaseSvg />,
  },
  {
    name: "Настройки",
    path: "settings",
    img: <SettingsSvg />,
  },
];

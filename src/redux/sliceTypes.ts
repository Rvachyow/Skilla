import { contactProps } from "../types/contactDataType";

export interface contactDateTypes {
  data: contactProps[] | [];
  filtred: contactProps[] | [];
  status: "loading" | "loaded";
}

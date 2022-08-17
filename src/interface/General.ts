import { ChangeEventHandler } from "react";
import { IconType } from "react-icons";

export interface CardData {
  title: string;
  subTitle: string;
  inputFields?: Array<Field>;
  cards?: Array<Card>;
  buttons?: Array<Button>;
}

export interface Field {
  type: string;
  label: string;
  onChange: ChangeEventHandler;
  placeholder?: string;
  domain?: string;
  disabled?: boolean;
  optionalText?: string;
}
export interface Card {
  icon: IconType;
  title: string;
  body: string;
}
export interface Button {
  title: string;
  onClick: any;
}

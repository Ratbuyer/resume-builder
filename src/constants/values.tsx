import Jake from "@components/resume/jake";
import Kyvernetes from "@components/resume/kyvernetes";
import type { TemplatesType } from "./types";

export const colorTable: [string, string][] = [
  ["White", "#ffffff"],
  ["Snow", "#FFFAFA"],
  ["Ivory", "#FFFFF0"],
  ["Honeydew", "#F0FFF0"],
  ["Azure", "#F0FFFF"],
  ["Beige", "#F5F5DC"],
  ["Lavenderblush", "#FFF0F5"],
  ["Lemon", "#FFFACD"],
  ["Ocean", "#ADD8E6"],
  ["Salmon", "#FA8072"],
  ["lavender", "#E6E6FA"],
];

export const fonts: string[] = [
  "Roboto",
  "Ubuntu",
  "Montserrat",
  "Comme",
  "Noto Sans",
  "Comic Neue",
  "Cormorant",
  "Mukta",
  "Play",
  "Bai Jamjuree",
];

export const formColorTable: string[] = [
  "bg-red-300",
  "bg-blue-300",
  "bg-yellow-300",
  "bg-green-300",
];

export const bullet = "•";


export const templates: TemplatesType = {
  "Jake": Jake,
  "Kyvernetes": Kyvernetes,
};

import { TEA_TYPE_IMAGES } from "../constants/teaTypes";

export function getTeaImage(tea) {
  if (tea.image) return tea.image;

  return TEA_TYPE_IMAGES[tea.type] || "/green_tea.png";
}

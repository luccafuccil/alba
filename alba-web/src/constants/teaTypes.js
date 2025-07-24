export const TEA_TYPES = [
  { value: "black", label: "Black" },
  { value: "green", label: "Green" },
  { value: "white", label: "White" },
  { value: "oolong", label: "Oolong" },
  { value: "puerh", label: "Pu-erh" },
];

export const TEA_TYPE_VALUES = TEA_TYPES.map((type) => type.value);

export const TEA_TYPE_LABELS = TEA_TYPES.map((type) => type.label);

export const TEA_TYPE_IMAGES = {
  black: "/black_tea.png",
  white: "/white_tea.png",
  green: "/green_tea.png",
  oolong: "/oolong_tea.jpg",
  puerh: "/puerh_tea.jpg",
};

export const getTeaTypeLabel = (value) => {
  const type = TEA_TYPES.find((type) => type.value === value);
  return type ? type.label : value.charAt(0).toUpperCase() + value.slice(1);
};

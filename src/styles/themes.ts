import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light",
  className: "light-retro",
  theme: {
    colors: {
      primary100: "#CBFEF7",
      primary200: "#98FEF7",
      primary300: "#64F9FC",
      primary400: "#3EE8F9",
      primary500: "#00CCF5",
      primary600: "#009FD2",
      primary700: "#0077B0",
      primary800: "#00558E",
      primary900: "#003D75",

      primaryLight: "$primary200",
      primaryLightHover: "$primary300",
      primaryLightActive: "$primary400",
      primaryLightContrast: "$primary600",
      primary: "$primary500",
      primaryBorder: "$primary500",
      primaryBorderHover: "$primary600",
      primarySolidHover: "$primary700",
      primarySolidContrast: "$black",
      primaryShadow: "$primary500",

      gradient: "linear-gradient(112deg, $primary200 -25%, $pink500 -10%, $purple500 80%)",

      background: "#FFFFFF",

      colorActive: "#2D4B34",
      colorCard: "#EFFFF6",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  className: "dark-retro",
  theme: {
    colors: {
      primary100: "#CBFEF7",
      primary200: "#98FEF7",
      primary300: "#64F9FC",
      primary400: "#3EE8F9",
      primary500: "#00CCF5",
      primary600: "#009FD2",
      primary700: "#0077B0",
      primary800: "#00558E",
      primary900: "#003D75",

      primaryLight: "$primary200",
      primaryLightHover: "$primary300",
      primaryLightActive: "$primary400",
      primaryLightContrast: "$primary600",
      primary: "$primary500",
      primaryBorder: "$primary500",
      primaryBorderHover: "$primary600",
      primarySolidHover: "$primary700",
      primarySolidContrast: "$black",
      primaryShadow: "$primary500",

      gradient: "linear-gradient(112deg, $primary200 -25%, $pink500 -10%, $purple500 80%)",

      background: "#0D0D00",

      colorActive: "#D3FFDD",
      colorCard: "#201F1F",
    },
  },
});

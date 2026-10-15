import type { ThemeConfig } from "antd";

export const colors = {
  paper: "#f6f1e4",
  sheet: "#fffdf6",
  ink: "#141414",
  inkSoft: "#4a463d",
  cyan: "#00a6e8",
  magenta: "#d6006f",
  magentaDeep: "#a80058",
  yellow: "#ffe600",
};

export const theme: ThemeConfig = {
  token: {
    colorPrimary: colors.magenta,
    colorLink: colors.ink,
    colorLinkHover: colors.magenta,
    colorText: colors.ink,
    colorTextSecondary: colors.inkSoft,
    colorTextDescription: colors.inkSoft,
    colorBgLayout: colors.paper,
    colorBgContainer: colors.sheet,
    colorBgElevated: colors.sheet,
    colorBorder: colors.ink,
    colorBorderSecondary: "#e4dccb",
    colorSplit: "#e4dccb",
    colorError: "#c81e1e",
    fontFamily: "var(--font-body), system-ui, sans-serif",
    fontFamilyCode: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: 15,
    borderRadius: 4,
    borderRadiusLG: 6,
    lineWidth: 2,
    controlOutline: "rgba(0, 166, 232, 0.35)",
    boxShadowSecondary: "0 6px 18px rgba(20, 20, 20, 0.16)",
  },
  components: {
    Button: {
      borderRadius: 999,
      borderRadiusLG: 999,
      borderRadiusSM: 999,
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none",
      fontWeight: 600,
    },
    Typography: {
      titleMarginBottom: "0.4em",
      fontWeightStrong: 400,
    },
    Menu: {
      itemSelectedBg: colors.yellow,
      itemSelectedColor: colors.ink,
      itemHoverBg: "#f1ead6",
      itemBorderRadius: 4,
      activeBarBorderWidth: 0,
    },
    Tabs: {
      inkBarColor: colors.magenta,
      itemSelectedColor: colors.ink,
      itemHoverColor: colors.magenta,
      titleFontSize: 15,
    },
    Card: {
      headerFontSize: 18,
    },
    Tag: {
      defaultBg: colors.yellow,
    },
  },
};

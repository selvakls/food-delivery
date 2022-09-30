import { createTheme } from "@mui/material";
import "./font.css";
declare module "@mui/material/styles" {
  interface Palette {
    textColors?: PaletteOptions["textColors"];
  }

  interface PaletteOptions {
    textColors?: {
      highEmphasis?: string;
      mediumEmphasis?: string;
      lowEmphasis?: string;
      white?: string;
      success?: string;
      error?: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

declare module '@mui/material/Button'{
  interface ButtonPropsVariantOverrides{
    xyz: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052FF",
      "100": "#FAFCFF",
      "300": "#66A1FF",
      "500": "#0052FF",
      "700": "#002EB7",
      "900": "00177A",

    },
    success: {
      main: "#FFFFFF",
      "100": "#E9F7EC",
      "500": "#46BF31",
    },
    warning: {
      main: "#FFFFFF",
      "100": "#FFF6ED",
      "300": "#FFA74F",
    },
    error: {
      main: "#FFFFFF",
      "100": "#F3E6EB",
      "200": "#B71A33",
    },
    grey: {
      "50": "#F2F2F7",
      "100": "#ECECF7",
      "300": "#B4B4CF",
      "500": "#4B4B60",
      "700": "#252545",
      "900": "#0E0E2E",
      "A100": "#FFFFFF"
    },
    textColors: {
      highEmphasis: "#343446",
      mediumEmphasis: "#7D7D89",
      lowEmphasis: "#B2B2B9",
      white: "#FFFFFF",
      success: "#20B03F",
      error: "#B71A33"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F1F6F4",
    },
  },
  typography: {
    fontFamily: "Graphik",
    h4: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "54px",
    },
    h6: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "34px",
    },
    subtitle1: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "28px",
    },
    subtitle2: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "28px",
    },
    body1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "22px",
    },
    body2: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "22px",
    },
    button: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "42px",
    },
    caption: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "16px",
    },
    caption1: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "16px",
    },
    caption2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "16px",
    },
    overline: {
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "14px",
    }
  },
  spacing: [0, 2, 4, 8, 12, 16, 20, 24, 32],
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "xyz"},
          style:{
            border: `4px dashed`,
            background: "red",
            backgroundColor: "red"
          }
        }
      ],
      
    }
  }
});

export default theme;
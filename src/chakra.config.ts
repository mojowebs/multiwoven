import { extendTheme } from "@chakra-ui/react";

import "@fontsource-variable/manrope";

const extenstion = {
  colors: {
    mw_orange: "#E63D2D",
    brand: {
      100: "#FFE7E6",
      200: "#FAC5C3",
      300: "#F5837F",
      400: "#F54C3D",
      500: "#CC1C16",
      600: "#720D09",
    },
    gray: {
      100: "#FFFFFF",
      200: "#F9FAFB",
      300: "#F2F4F7",
      400: "#EAECF0",
      500: "#D0D5DD",
      600: "#98A2B3",
    },
    black: {
      100: "#667085",
      200: "#475467",
      300: "#344054",
      400: "#1D2939",
      500: "#10182B",
      600: "#000000",
    },
    success: {
      100: "#DCF2EF",
      200: "#B7EDE3",
      300: "#71D9C6",
      400: "#33C0A7",
      500: "#129981",
      600: "#075042",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bgColor: "brand.400",
          _hover: { bgColor: "brand.300" },
          color: "white",
        },
        outline: {
          bgColor: "gray.100",
          _hover: { bgColor: "brand.400", color: "white" },
          color: "brand.400",
          outline: "1px",
          borderColor: "brand.400",
        },
        ghost: {
          bgColor: "gray.400",
          _hover: { bgColor: "gray.500", color: "black" },
          color: "black",
        },
        shell: {
          bgColor: "gray.100",
          _hover: { bgColor: "gray.300", color: "black" },
          color: "black",
          borderColor: "gray.400",
          border: "1px",
        },
      },
      sizes: {
        xs: {
          h: "24px",
          w: "92px",
          px: "8px",
          gap: "6px",
          radius: "6px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "700",
        },
        sm: {
          h: "32px",
          w: "114px",
          px: "12px",
          gap: "8px",
          radius: "6px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "700",
        },
        md: {
          h: "40px",
          w: "126px",
          px: "16px",
          gap: "2px",
          radius: "8px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "700",
        },
        lg: {
          h: "48px",
          w: "157px",
          px: "24px",
          gap: "2px",
          radius: "8px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "700",
        },
      },
    },
    Text: {
      sizes: {
        xl: {
          fontSize: "20px",
          lineHeight: "30px",
        },
        lg: {
          fontSize: "18px",
          lineHeight: "28px",
        },
        md: {
          fontSize: "16px",
          lineHeight: "24px",
        },
        sm: {
          fontSize: "14px",
          lineHeight: "20px",
        },
        xs: {
          fontSize: "12px",
          lineHeight: "18px",
        },
      },
      font: "Manrope",
    },
    Heading: {
      sizes: {
        xl: {
          fontSize: "60px",
          lineHeight: "72px",
        },
        lg: {
          fontSize: "48px",
          lineHeight: "60px",
        },
        md: {
          fontSize: "36px",
          lineHeight: "44px",
        },
        sm: {
          fontSize: "30px",
          lineHeight: "38px",
        },
        xs: {
          fontSize: "24px",
          lineHeight: "32px",
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            width: "100%",
            border: "1px",
            borderColor: "gray.400",
            boxSizing: "border-box",
            borderRadius: 8,
          },
        },
      },
    },
  },

  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
};

const mwTheme = extendTheme(extenstion);

export default mwTheme;

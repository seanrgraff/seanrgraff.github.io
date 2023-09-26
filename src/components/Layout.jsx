import React from "react";
import HopperScript from "../styles/Hopper-Script.ttf";
import Smoke from "../components/Smoke";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MoneyStuff from "./money";

const theme = createTheme({
  typography: {
    h1: { fontFamily: "Hopper" },
    h2: { fontFamily: "Hopper, Roboto" },
    h3: { fontFamily: "Hopper, Roboto" },
    h4: { fontFamily: "Hopper, Roboto" },
  },
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
                @font-face {
                    font-family: 'Hopper';
                    font-style: script;
                    src: url(${HopperScript});
                }
            `,
    },
  },
});

export const useHeight = () => {
  const useLg = useMediaQuery(theme.breakpoints.down("lg"));
  const useMd = useMediaQuery(theme.breakpoints.down("md"));
  let height = 315;
  height = useLg ? height * 1.5 : useMd ? height : height * 1.5 * 1.5;

  return height;
};

const Layout = ({ children }) => {
  const height = useHeight();
  const useMd = useMediaQuery(theme.breakpoints.down("md"));
  const useSm = useMediaQuery(theme.breakpoints.down("sm"));
  const maxWidth = height * 2;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Smoke />
      <main>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              py: 2,
              px: 1,
              mx: 1,
              mb: 3,
              mt: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: maxWidth,
              width: "100%",
            }}
          >
            <Typography
              sx={{ py: 3, mb: 1 }}
              component="h1"
              variant={useSm ? "h4" : useMd ? "h3" : "h1"}
            >
              The Graff Brothers
            </Typography>
            {children}
            <MoneyStuff />
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default Layout;

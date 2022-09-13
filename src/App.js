import {ThemeProvider, createTheme,} from "@mui/material"
import "./App.css";
import React, {useState, useEffect} from "react";
import { useRoutes } from "react-router-dom";
// import HomeRoutes from "./router/home";
import DefaultRoutes from "./router/index";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./context/auth";

const theme = {
  palette: {
    primary: {
      main: "#3849aa",
      text: "#ffffff",
    },
    secondary: {
      main: "#7ce761",
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Quicksand",
      "Montserrat",
      "sans-serif",
      "Arial",
      "Roboto",
      "Poppins",
    ].join(","),
  },
};


function App() {
  const routes = useRoutes(DefaultRoutes);
  // const [currentUser, setCurrentUser] = useState(null)

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //   });
  // }, []);
  return (
    <ThemeProvider theme = {createTheme(theme)}>
    <AuthProvider  >
      {routes}
    </AuthProvider>
    </ThemeProvider>

  )

}

export default App;

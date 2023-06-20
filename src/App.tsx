/** @format */
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "Routing";
import themes from "./themes";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://queuing-system-a7cd9-default-rtdb.firebaseio.com/test.json`
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchData();
  }, []);
  console.log(themes(0));
  return (
    <ThemeProvider theme={themes(0)}>
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
}

export default App;

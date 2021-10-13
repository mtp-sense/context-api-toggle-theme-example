import React from "react";
import ThemeProvider from "./ThemeProvider";
import FunctionBasedComponent from "./functionBasedComponent";
import {
  ThemeContext,
  ThemeUpdateContext,
  useTheme,
  useUpdateTheme,
} from "./ThemeProvider";

function FunctionComponentForSeparateThemeComp() {
  const dark = useTheme(ThemeContext);
  const toggleTheme = useUpdateTheme(ThemeUpdateContext);
  const themeStyle = {
    backgroundColor: dark ? "#ccc" : "#aaa",
    color: dark ? "#fff" : "#000",
    borderColor: dark ? "#aaa" : "#ccc",
    borderRadius: "10px",
    width: "300px",
    height: "100px",
    marginLeft: "600px",
    marginTop: "30px",
    fontSize: "30px",
    fontWeight: "Bolder",
    padding: "20px",
  };
  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <div style={themeStyle}>
        Function Component For Separate Theme Provider
      </div>
    </>
  );
}
export default FunctionComponentForSeparateThemeComp;

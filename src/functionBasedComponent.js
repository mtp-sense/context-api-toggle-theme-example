import React, { useContext } from "react";
import { ThemeContext } from "./App";

function FunctionBasedComponent() {
  const dark = useContext(ThemeContext);
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

  return <div style={themeStyle}>Function Component</div>;
}
export default FunctionBasedComponent;

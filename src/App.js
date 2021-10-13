import "./App.css";
import React, { useState } from "react";
import ClassBasedComponent from "./classBasedComponent";
import FunctionBasedComponent from "./functionBasedComponent";
import ThemeProvider from "./ThemeProvider";
import FunctionComponentForSeparateThemeComp from "./functionComponentForSeparateThemeProviderComp";

export const ThemeContext = React.createContext();

function App() {
  // const [darkTheme, setDarkTheme] = useState(true);
  // function toggleTheme() {
  //   setDarkTheme(!darkTheme);
  // }
  // return (
  //   <div className="App">
  //     <h1>Context API - Theme</h1>
  //     <ThemeContext.Provider value={darkTheme}>
  //       <button onClick={toggleTheme}>Toggle Theme</button>
  //       <ClassBasedComponent />
  //       <FunctionBasedComponent />
  //     </ThemeContext.Provider>
  //   </div>
  // );

  return (
    <div className="App">
      <h1>Context API - Theme</h1>
      <ThemeProvider>
        <FunctionComponentForSeparateThemeComp></FunctionComponentForSeparateThemeComp>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();
export const useTheme = function () {
  return useContext(ThemeContext);
};
export const useUpdateTheme = function () {
  return useContext(ThemeUpdateContext);
};
function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return(

    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;

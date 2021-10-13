import React, { Component } from "react";
import { ThemeContext } from "./App";

class ClassBasedComponent extends Component {
  ThemeStyle = (dark) => {
    return {
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
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.ThemeStyle(darkTheme)}>Class Component</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ClassBasedComponent;

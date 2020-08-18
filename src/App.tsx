import React from "react";

interface IApps {
  text?: string;
}

const App: React.FC<IApps> = ({ text = "TypeScript" }) => (
  <h1> Hello, dearr {text} </h1>
);

export default App;

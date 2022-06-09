import { createContext } from "react";

const themeContext = createContext({
  Sage: "#87BCBF",
  Rust: "#D97D54",
  Drab: "#324755",
  Danger: "#D95454",
  Onyx: "#1B1C20",
  Slate: "#6E8CA0",
  Snow: "#FFFFFF",
});

export default themeContext;

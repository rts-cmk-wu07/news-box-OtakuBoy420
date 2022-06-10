import { createElement } from "react";
import * as FontAwesome from "react-icons/fa";

const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = createElement(FontAwesome[iconName]);
  return <i style={{ fontSize: size, color: color }}>{icon}</i>;
};

export default Icon;

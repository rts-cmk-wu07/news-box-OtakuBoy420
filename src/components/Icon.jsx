import * as FontAwesome from "react-icons/fa";
import * as IonIcons from "react-icons/io";
const library = { ...FontAwesome, ...IonIcons };
console.log(library);
const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

const IconElement = () => {
  const iconString = "FaTrash";
  const beer = React.createElement(FontAwesome[iconString]);
  return (
    <>
      <FontAwesome.FaBeer />
      <div style={{ fontSize: 24, color: "orange" }}>{beer}</div>
    </>
  );
};

export default IconElement;

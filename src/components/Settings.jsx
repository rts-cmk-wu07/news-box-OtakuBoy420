import Header from "./Header";
import { useContext } from "react";
import themeContext from "../context/themeContext";

const Settings = () => {
  const colors = useContext(themeContext);
  return (
    <>
      <Header
        title="Archive"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor="#fff"
        iconRightSize="20px"
      />
      <h1>settings</h1>
      <p>lol</p>
    </>
  );
};

export default Settings;

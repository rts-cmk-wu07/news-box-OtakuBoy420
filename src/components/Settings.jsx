import Switch from "./Checkbox";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import CategoryContext from "../context/CategoryContext";
import themeContext from "../context/themeContext";
import Header from "./Header";
import DarkmodeContext from "../context/DarkmodeContext";

const Settings = () => {
  const colors = useContext(themeContext);
  const { categories } = useContext(CategoryContext);
  let categorySettings = JSON.parse(localStorage.getItem("categorySettings")) || false;

  let categoriesKeys = [];
  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  const styles = {
    settings: css`
      background-color: #eceff0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: ${colors.Sage};
        font-size: 30px;
        margin-top: 2rem;
        margin-bottom: 2px;
      }
      h3 {
        color: #707070;
        font-family: "EuropaLight";
        font-size: 20px;
        padding-bottom: 1rem;
        border-bottom: 2px solid white;
      }
      h4 {
        text-transform: uppercase;
        color: ${colors.Drab};
        margin-top: 5px;
      }
      & button {
        font-family: "Rift Soft";
        font-size: 14px;
        border: 1px solid ${colors.Fossil};
        padding: 0.75rem 2rem;
        border-radius: 24px;
        letter-spacing: 2px;
        margin-block: 2rem;
        color: #334856;
      }
      & p {
        color: #707070;
        font-family: "EuropaLight";
        font-size: 20px;
        padding-bottom: 1rem;
        border-bottom: 2px solid white;
      }
      & small {
        margin-top: 1rem;
        color: ${colors.Slate};
        font-size: 12px;
        margin-bottom: 2rem;
      }
      & section {
        background-color: ${colors.Snow};
        border-radius: 16px;
        box-shadow: 0px 1px 10px -3px rgba(0, 0, 0, 0.28);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 3rem auto;
        gap: 0.5rem;
        & div {
          display: flex;
          padding: 15px 25px;
          border-bottom: 1px solid lightgray;
          & label {
            margin: 0 0 0 auto;
            color: white;
          }
        }
      }
    `,
  };

  return (
    <>
      <Header
        title="News settings"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={!isDarkMode ? colors.Drab : "white"}
        iconRight="FaCog"
        iconRightColor="black"
        iconRightSize="0px"
      />
      <main css={styles.settings} className={`${isDarkMode ? "dark" : ""}`}>
        <h2>Manage</h2>
        <p className={`${isDarkMode ? "white" : ""}`}>Categories</p>
        <section className={`${isDarkMode ? "gray" : ""}`}>
          {categoriesKeys.map((category, i) => {
            return (
              <div key={category}>
                <h4 className={`${isDarkMode ? "white" : ""}`}>{category}</h4>
                <Switch category={category} checked={(categorySettings && categorySettings[i][category] && true) || false} />
              </div>
            );
          })}
        </section>
        <button className={`${isDarkMode ? "dark" : ""}`} onClick={() => setIsDarkMode(!isDarkMode)}>
          TOGGLE DARK MODE
        </button>
        <small className={`${isDarkMode ? "white" : ""}`}>Version 4.8.15.16.23.42</small>
      </main>
    </>
  );
};

export default Settings;

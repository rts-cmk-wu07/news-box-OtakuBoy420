/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header";
import { useState, useContext } from "react";
import themeContext from "../context/themeContext";
import DarkmodeContext from "../context/DarkmodeContext";
const Settings = () => {
  const colors = useContext(themeContext);
  const styles = {
    settings: css`
      background-color: #eceff0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      article {
        background-color: ${colors.Snow};
        border-radius: 16px;
        box-shadow: 0px 1px 10px -3px rgba(0, 0, 0, 0.28);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 3rem auto;
        gap: 0.5rem;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1rem;
        margin-top: 1rem;
      }
      button {
        font-family: "Rift Soft";
        font-size: 14px;
        border: 1px solid ${colors.Fossil};
        padding: 0.75rem 2rem;
        border-radius: 24px;
        letter-spacing: 2px;
        margin-block: 2rem;
        color: #334856;
      }
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
      }
      input[type="checkbox"] {
        height: 0;
        width: 0;
        visibility: hidden;
      }

      small {
        margin-top: 1rem;
        color: ${colors.Slate};
        font-size: 12px;
        margin-bottom: 2rem;
      }
      label {
        cursor: pointer;
        text-indent: -9999px;
        width: 55px;
        height: 30px;
        background: #e0e5e5;
        display: block;
        border-radius: 100px;
        position: relative;
      }

      label:after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 23px;
        height: 23px;
        background: #fff;
        border-radius: 50px;
        transition: 0.3s;
        box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.28);
      }

      input:checked + label {
        background: ${colors.Sage};
      }

      input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }

      label:active:after {
        width: 30px;
      }
    `,
  };
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  console.log(isDarkMode);
  return (
    <>
      <Header
        title="News settings"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={!isDarkMode ? colors.Drab : "white"}
        iconRight="FaCog"
        iconRightColor={colors.Drab}
        iconRightSize="0px"
      />
      <section css={styles.settings} className={`${isDarkMode ? "dark" : ""}`}>
        <h2>Manage</h2>
        <h3 className={`${isDarkMode ? "white" : ""}`}>Categories</h3>
        <article className={`${isDarkMode ? "gray" : ""}`}>
          <div>
            <h4 className={`${isDarkMode ? "white" : ""}`}>europe</h4>
            <input type="checkbox" id="europe" />
            <label htmlFor="europe">Toggle</label>
          </div>
          <hr />
          <div>
            <h4 className={`${isDarkMode ? "white" : ""}`}>health</h4>
            <input type="checkbox" id="health" />
            <label htmlFor="health">Toggle</label>
          </div>
          <hr />
          <div>
            <h4 className={`${isDarkMode ? "white" : ""}`}>sport</h4>
            <input type="checkbox" id="sport" />
            <label htmlFor="sport">Toggle</label>
          </div>
          <hr />
          <div>
            <h4 className={`${isDarkMode ? "white" : ""}`}>business</h4>
            <input type="checkbox" id="business" />
            <label htmlFor="business">Toggle</label>
          </div>
          <hr />
          <div>
            <h4 className={`${isDarkMode ? "white" : ""}`}>travel</h4>
            <input type="checkbox" id="travel" />
            <label htmlFor="travel">Toggle</label>
          </div>
        </article>
        <button
          className={`${isDarkMode ? "dark" : ""}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          TOGGLE DARK MODE
        </button>
        <small className={`${isDarkMode ? "white" : ""}`}>
          Version 4.8.15.16.23.42
        </small>
      </section>
    </>
  );
};

export default Settings;

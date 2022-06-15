/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import Icon from "./Icon";
import DarkmodeContext from "../context/DarkmodeContext";

const ArchiveCategory = (props) => {
  const colors = useContext(themeContext);
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  const styles = {
    archivecategory: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 1rem;
      & img {
        width: 35px;
        border-radius: 50px;
        background-color: white;
        padding: 0.4rem;
        box-shadow: 1px 3px 10px -8px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      }
      & div {
        display: flex;
        align-items: center;
        column-gap: 0.75rem;
        margin-left: 0.75rem;
        & h2 {
          text-transform: uppercase;
          color: ${colors.Drab};
          text-align: center;
          font-size: 15px;
          font-weight: bold;
        }
      }
    `,
  };
  return (
    <>
      <article
        css={styles.archivecategory}
        className={`${isDarkMode ? "dark  " : " "}`}
      >
        <div>
          <img src="./img/orangeicon.svg" alt="img" />
          <h2 className={`${isDarkMode ? "white" : " "}`}>
            {props.categoryTitle}
          </h2>
        </div>
        <Icon
          iconName={props.icon}
          size="20px"
          color={!isDarkMode ? colors.Drab : "white"}
        />
      </article>
      <hr />
    </>
  );
};

export default ArchiveCategory;

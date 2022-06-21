/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import { BiSearch } from "react-icons/bi";
import DarkmodeContext from "../context/DarkmodeContext";

const SearchField = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  const colors = useContext(themeContext);
  const [query, setQuery] = useState("");
  const styles = {
    searchfield: css`
      margin: 1rem auto;
      border: none;
      outline: none;
      border-radius: 4px;
      width: 90%;
      margin-block: 1.25rem;
      & input {
        border-radius: 4px;
        background-color: ${colors.Ice};
        border: none;
        outline: none;
        padding-left: 2rem;
        color: ${colors.Slate};
        font-size: 15px;
        height: 45px;

        &::placeholder {
          font-size: 15px;
          font-family: "EuropaLight";
          color: ${colors.Slate};
        }
      }
      .search-icon {
        margin-right: 1rem;
        padding-top: 5px;
      }
      .searchFieldContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${colors.Ice};
        margin-bottom: 1rem;
        border-radius: 4px;
      }
    `,
  };
  return (
    <>
      <div css={styles.searchfield}>
        <div className={`searchFieldContainer ${isDarkMode ? "gray" : " "}`}>
          <input
            type="text"
            aria-label="Search-Field"
            placeholder="Search News"
            className={`${isDarkMode ? "gray" : " "}`}
            onChange={(e) => setQuery(e.target.value)}
            spellCheck="false"
          />
          <button type="submit">
            <BiSearch className="search-icon" color={colors.Fossil} size="26px" />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SearchField;

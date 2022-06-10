/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { BiSearch } from "react-icons/bi";

const SearchField = () => {
  const colors = useContext(themeContext);
  const styles = {
    searchfield: css`
      margin: 1rem auto;
      border: none;
      outline: none;
      border-radius: 4px;
      border-bottom: 1px solid #e0e1e2;
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
    <div css={styles.searchfield}>
      <div className="searchFieldContainer">
        <input type="text" aria-label="Search-Field" placeholder="Search News" />
        <button type="submit">
          <BiSearch className="search-icon" color={colors.Fossil} size="26px" />
        </button>
      </div>
    </div>
  );
};

export default SearchField;

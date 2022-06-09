/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { FaChevronLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import SearchField from "./SearchField";

const Header = () => {
  const colors = useContext(themeContext);
  const styles = {
    header: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid #e0e1e2;
      & h2 {
        font-size: 18px;
        color: ${colors.Drab};
        font-weight: bold;
      }
    `,
  };
  return (
    <>
      <header css={styles.header}>
        <button>
          <FaChevronLeft color={colors.Drab} />
        </button>
        <h2>Archive</h2>
        <button>
          <FaCog color={colors.Drab} />
        </button>
      </header>
      <SearchField />
    </>
  );
};

export default Header;

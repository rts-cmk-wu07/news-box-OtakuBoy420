/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { FaChevronLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import { BsInbox } from "react-icons/bs";

const Header = (props) => {
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
        <Link to="/">
          <FaChevronLeft color={colors.Drab} size="20px" />
        </Link>
        <h2>{props.title}</h2>
        <Link to="/settings">
          <FaCog color={colors.Drab} size="20px" />
        </Link>
      </header>
      <SearchField />
    </>
  );
};

export default Header;

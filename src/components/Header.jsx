/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { FaChevronLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import SearchField from "./SearchField";
import { Link, useNavigate } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
import Icon from "./Icon";

const Header = (props) => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate(-1)}>
          <Icon iconName={props.iconLeft} size={props.iconLeftSize} color={props.iconLeftColor} />
        </button>
        <h2>{props.title}</h2>
        <Link to="/settings">
          <Icon iconName={props.iconRight} size={props.iconRightSize} color={props.iconRightColor} />
        </Link>
      </header>
    </>
  );
};

export default Header;

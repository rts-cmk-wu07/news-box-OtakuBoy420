/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { Link, useNavigate } from "react-router-dom";
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
      width: 90%;
      margin: 0 auto;
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
        {props.iconLeft === "FaChevronLeft" && (
          <button onClick={() => navigate(-1)}>
            <Icon iconName={props.iconLeft} size={props.iconLeftSize} color={props.iconLeftColor} />
          </button>
        )}
        {props.iconLeft === "FaInbox" && (
          <Link to="/archive">
            <Icon iconName={props.iconLeft} size={props.iconLeftSize} color={props.iconLeftColor} />
          </Link>
        )}
        <h2>{props.title}</h2>
        <Link to="/settings">
          <Icon iconName={props.iconRight} size={props.iconRightSize} color={props.iconRightColor} />
        </Link>
      </header>
      <hr />
    </>
  );
};

export default Header;

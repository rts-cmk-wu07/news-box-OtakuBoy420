import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import Header from "./Header";
import Icon from "./Icon";

const NotFound = () => {
  const colors = useContext(themeContext);
  console.log(colors);
  const styles = {
    notfound: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 3rem;
      font-size: 1.5rem;
      text-align: center;
      color: ${colors.Drab};
      a {
        text-decoration: underline;
      }
    `,
  };
  return (
    <>
      <Header
        title="Not Found"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor={colors.Drab}
        iconRightSize="20px"
      />
      <div css={styles.notfound} className="not-found">
        <h2>Sorry!</h2>
        <br />
        <p>That page can't be found</p>
        <br />
        <Link to="/">
          Back to the homepage
          <Icon iconName="FaExternalLinkAlt" />
        </Link>
      </div>
    </>
  );
};

export default NotFound;

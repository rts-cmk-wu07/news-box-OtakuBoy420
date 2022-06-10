import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";

const NotFound = () => {
  const colors = useContext(themeContext);
  console.log(colors);
  const styles = {
    notfound: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 3rem;
      font-size: 2rem;
      text-align: center;
      width: 375px;
      color: ${colors.Drab};
      a {
        text-decoration: underline;
      }
    `,
  };
  return (
    <>
      <div css={styles.notfound} className="not-found">
        <h2>Sorry!</h2>
        <p>That page can't be found</p>
        <Link to="/">Back to the homepage...</Link>
      </div>
    </>
  );
};

export default NotFound;

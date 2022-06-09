/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
const Header = () => {
  const colors = useContext(themeContext);
  const styles = {
    header: css`
      & p {
        font-size: 4rem;
        color: ${colors.Drab};
      }
    `,
  };
  return (
    <header css={styles.header}>
      <p>din mor</p>
    </header>
  );
};

export default Header;

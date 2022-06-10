/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header";
import { useContext } from "react";
import themeContext from "../context/themeContext";

const Settings = () => {
  const colors = useContext(themeContext);
  const styles = {
    settings: css`
      background-color: #eceff0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      article {
        background-color: ${colors.Snow};
        border-radius: 16px;
        box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.28);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 3rem auto;
        gap: 3rem;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0f3f4;
      }
      h4 {
        text-transform: uppercase;
        color: ${colors.Drab};
      }
      input[type="checkbox"] {
        height: 0;
        width: 0;
        visibility: hidden;
      }

      label {
        cursor: pointer;
        text-indent: -9999px;
        width: 55px;
        height: 30px;
        background: #e0e5e5;
        display: block;
        border-radius: 100px;
        position: relative;
      }

      label:after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 23px;
        height: 23px;
        background: #fff;
        border-radius: 50px;
        transition: 0.3s;
        box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.28);
      }

      input:checked + label {
        background: ${colors.Sage};
      }

      input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }

      label:active:after {
        width: 30px;
      }
    `,
  };
  return (
    <>
      <Header
        title="News settings"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor="#fff"
        iconRightSize="20px"
      />
      <section css={styles.settings}>
        <h2>Manage</h2>
        <h3>Categories</h3>
        <article>
          <div>
            <h4>europe</h4>
            <input type="checkbox" id="europe" />
            <label for="europe">Toggle</label>
          </div>
          <div>
            <h4>health</h4>
            <input type="checkbox" id="health" />
            <label for="health">Toggle</label>
          </div>
          <div>
            <h4>sport</h4>
            <input type="checkbox" id="sport" />
            <label for="sport">Toggle</label>
          </div>
          <div>
            <h4>business</h4>
            <input type="checkbox" id="business" />
            <label for="business">Toggle</label>
          </div>
          <div>
            <h4>travel</h4>
            <input type="checkbox" id="travel" />
            <label for="travel">Toggle</label>
          </div>
        </article>
      </section>
    </>
  );
};

export default Settings;

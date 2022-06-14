/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header";
import SearchField from "./SearchField";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import ArchiveCategory from "./ArchiveCategory";
import Message from "./Message";
const Newsbox = () => {

  const colors = useContext(themeContext);
  return (
    <>
      <Header
        title="Newsbox"
        iconLeft="FaInbox"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor={colors.Drab}
        iconRightSize="20px"
      />
      <SearchField />
      <section>
        <ArchiveCategory categoryTitle="health" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
          img="./img/image_21.png"
        />
        <ArchiveCategory categoryTitle="sport" />
        <ArchiveCategory categoryTitle="travel" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
          img="./img/image_21.png"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
          img="./img/image_21.png"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
          img="./img/image_21.png"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
          img="./img/image_21.png"
        />
      </section>
    </>
  );
};

export default Newsbox;

import ArchiveCategory from "./ArchiveCategory";
import Header from "./Header";
import Message from "./Message";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import SearchField from "./SearchField";

const Archive = () => {
  const colors = useContext(themeContext);
  return (
    <>
      <Header
        title="Archive"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor={colors.Drab}
        iconRightSize="20px"
      />
      <SearchField />
      <section>
        <ArchiveCategory categoryTitle="sport" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
        />
        <ArchiveCategory categoryTitle="travel" />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
        />
        <Message
          name="Kate Austen"
          message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
        />
      </section>
    </>
  );
};

export default Archive;

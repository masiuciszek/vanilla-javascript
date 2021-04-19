import React from "react";
import ScrollProvider from "../context";
import InfiniteScroll from "./infinte-scroll";

const App = () => {
  return (
    <ScrollProvider>
      <InfiniteScroll />
    </ScrollProvider>
  );
};

export default App;

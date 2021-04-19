import React, { useRef } from "react";
import { PER_PAGE, useScrollDispatch, useScrollState } from "../../context";

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const InfiniteScroll = () => {
  const { data, currentState, hasMore, after } = useScrollState();
  const dispatch = useScrollDispatch();
  const dummyList = new Array(50).fill(0).map((val, i) => val + 1);
  const load = (): void => {
    dispatch({ type: "START" });
    setTimeout(() => {
      const data = dummyList.slice(after, after + PER_PAGE);
      dispatch({ type: "LOADED", payload: data });
    }, 300);
  };

  const observer = useRef(new IntersectionObserver(entries => {}, { threshold: 1 }));

  return (
    <div>
      <h1>Scroll</h1>
    </div>
  );
};

export default InfiniteScroll;

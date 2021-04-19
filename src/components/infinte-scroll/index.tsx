import React, { useEffect, useRef, useState } from "react";
import { useScrollDispatch, useScrollState } from "../../context";

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
const dummyList = new Array(50).fill(0).map((val, i) => val + 1);

const InfiniteScroll = () => {
  const [data, setData] = useState<any[]>(dummyList.slice(0, 10));
  const [element, setElement] = useState<null | Element>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const load = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setData(p => {
        const prevLength = p.length;
        const newData = dummyList.slice(prevLength, prevLength + 10);

        return [...p, newData];
      });
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    if (data.length < dummyList.length) {
      setHasMore(true);
    }
  }, [data.length]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        console.log(entries, first);
        if (first.isIntersecting) {
          load();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currenElement = element;
    const currentObserver = observer.current;

    if (currenElement) {
      currentObserver.observe(currenElement);
    }

    return () => {
      if (currenElement) {
        currentObserver.unobserve(currenElement);
      }
    };
  }, [element]);

  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map(d => (
            <li key={d} style={{ background: "steelblue", width: 200, height: 200 }}>
              {d}
            </li>
          ))}

        {isLoading && <li>Loading...</li>}

        {!isLoading && hasMore && <li ref={setElement} style={{ background: "transparent" }}></li>}
      </ul>
    </div>
  );
};

export default InfiniteScroll;

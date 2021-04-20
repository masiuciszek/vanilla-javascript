import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const markdown = `.
  ## Intersection Observer with infinite scroll
  The intersection observer will give us back \`entries\` which is an array with
  the elements that you want to observe, in this case we just want to target the \`target element\` 

  To not keep the load function in the closure, we
  \`\`\`tsx
  loadRef.current = loadMore;
  \`\`\`
`;

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarkDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-right: 2px solid #000;
`;

const List = styled.ul`
  overflow-y: scroll;
  height: 100vh;
`;

const Li = styled.li`
  height: 10rem;
  width: 30rem;
  background-color: #036bd4;
  text-align: center;
  margin: 0 auto 1rem;
  display: grid;
  align-items: center;
  box-shadow: 1px 3px 2px 3px #ccc;
`;

const list: number[] = Array.from({ length: 50 }, (_, i) => i + 1);
const InfiniteScroll = () => {
  const [data, setData] = useState([...list.slice(0, 10)]);
  const [element, setElement] = useState<null | Element>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(list.length > 10);

  const loadMore = useCallback(() => {
    const currentLength = data.length;
    const moreData = currentLength < list.length;

    const nextEdges = moreData ? list.slice(currentLength, currentLength * 2) : [];
    setHasMore(moreData);
    setIsLoading(true);
    setTimeout(() => {
      setData([...data, ...nextEdges]);
      setIsLoading(false);
    }, 3000);
  }, [data]);

  const loadRef = useRef(loadMore);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        console.log({ entries, first });
        if (first.isIntersecting) {
          if (!hasMore) return;
          loadRef.current();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    loadRef.current = loadMore;
  }, [loadMore]);

  useEffect(() => {
    const currentElementRef = element;
    const currentObserver = observer.current;

    if (currentElementRef) {
      currentObserver.observe(currentElementRef);
    }
    return () => {
      if (currentElementRef) {
        currentObserver.unobserve(currentElementRef);
      }
    };
  }, [element]);

  return (
    <Wrapper>
      <MarkDownWrapper>
        <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
      </MarkDownWrapper>
      <List>
        {data.map(d => (
          <Li className="list-item-infinite-scroll" key={d}>
            {d}
          </Li>
        ))}
        <>
          {isLoading && hasMore ? <h3>...loading</h3> : "no more data"}

          {!isLoading && hasMore && (
            <div
              ref={setElement}
              style={{
                background: "tomato",
                width: "12rem",
                height: "6rem",
                margin: "1rem auto",
                textAlign: "center",
              }}
            >
              target
            </div>
          )}
        </>
      </List>
    </Wrapper>
  );
};

export default InfiniteScroll;

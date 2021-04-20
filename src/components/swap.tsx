import { Dispatch, LegacyRef, SetStateAction, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { AnimatePresence, motion } from "framer-motion";
// ref: React.MutableRefObject<Element>

const useOnScreen = (rootMargin = "0px") => {
  const [ref, setRef] = useState<null | Element>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, rootMargin]);

  return [setRef, isIntersecting];
};

const Wrapper = styled.div`
  height: 100vh;
`;

const styles = (isIntersecting: boolean) => {
  return css`
    background-color: ${isIntersecting ? "#23cebd" : "#efefef"};
    height: 100vh;
  `;
};

const SwapAndShow = () => {
  const [setRef, isIntersecting] = useOnScreen("-350px");

  return (
    <>
      <Wrapper>
        <h1>Scroll down to next section 👇</h1>
      </Wrapper>
      {/* @ts-ignore */}
      <div className={styles(isIntersecting)} ref={setRef}>
        <AnimatePresence exitBeforeEnter>
          {isIntersecting ? (
            <motion.div
              layout
              initial={{ opacity: 0, x: "100%" }}
              exit={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h1>Hey I'm on the screen</h1>
              <img
                src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
                loading="lazy"
                alt="hello"
              />
            </motion.div>
          ) : (
            <h1>Scroll down 300px from the top of this section 👇</h1>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SwapAndShow;

import { useEffect, useState } from "react";

export default function useWindowSize() {
  //   const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  } as {
    width: number;
    height: number;
  });

  function changeWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", () => changeWindowSize);
    };
  }, []);

  return windowSize;
}

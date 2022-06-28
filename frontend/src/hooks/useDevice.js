import { useEffect, useState, useCallback } from "react";

const useDevice = () => {
  const [width, setWidth] = useState();
  let device;

  const screenResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  // Initial screen detect
  useEffect(() => {
    screenResize();
  }, [screenResize]);

  // Resize event
  useEffect(() => {
    let resizeClear;
    window.addEventListener("resize", () => {
      clearTimeout(resizeClear);
      resizeClear = setTimeout(screenResize, 100);
    });
  }, [screenResize]);

  if (width < 768) device = "mobile";
  if (width > 768) device = "tablet";
  if (width > 1600) device = "desktop";

  return device;
};

export default useDevice;

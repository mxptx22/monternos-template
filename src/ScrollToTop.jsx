import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  let height = window.innerHeight;
  
  useEffect(() => {
    if (location.hash === '') {window.scrollTo(0, 0)};
    if (location.search === '?end'){window.scrollTo(0, height*6);console.log(height)};
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;
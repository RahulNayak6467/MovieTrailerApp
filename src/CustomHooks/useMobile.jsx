import { useEffect, useState } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = (boolean) => {
    setIsMobile(boolean);
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 600) {
        handleIsMobile(false);
      } else {
        handleIsMobile(true);
      }
    });
    return () =>
      window.removeEventListener("resize", function () {
        if (window.innerWidth > 600) {
          handleIsMobile(false);
        } else {
          handleIsMobile(true);
        }
      });
  }, []);

  return { isMobile };
}

export default useMobile;

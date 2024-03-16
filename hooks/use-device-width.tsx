import React from "react";

const useDeviceWidth = () => {
  const [deviceType, setDeviceType] = React.useState("");

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Phone
        setDeviceType("phone");
      } else if (width >= 768 && width < 1024) {
        // Tablet
        setDeviceType("tablet");
      } else {
        // Computer
        setDeviceType("computer");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};
export default useDeviceWidth;

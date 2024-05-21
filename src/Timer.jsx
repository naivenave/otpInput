import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    const ti = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => {
      clearInterval(ti);
    };
  }, []);
  return <div>{count}</div>;
};

export default Timer;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useProgress = () => {
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 103) {
          return 0;
        }
        const diff = Math.random() * 25;
        return Math.min(previousPercent + diff, 103);
      });
    }, 500);

    if (percent === 103) {
      navigate("/");
    }
    return () => {
      clearInterval(timer);
    };
  }, [percent, navigate]);

  return { percent };
};

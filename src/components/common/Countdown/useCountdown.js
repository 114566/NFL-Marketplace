import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

const useCountdown = (endDate) => {
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    setInterval(() => {
      const { days, hours, minutes, seconds } = intervalToDuration({
        start: new Date(),
        end: endDate,
      });

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
  }, []);

  return {
    days: countdown?.days || 0,
    hours: countdown?.hours || 0,
    minutes: countdown?.minutes || 0,
    seconds: countdown?.seconds || 0,
  };
};

export default useCountdown;

import { Box, Typography } from "@mui/material";
import useCountdown from "components/common/Countdown/useCountdown";
import React from "react";

const PickemScrolFreezTime = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2022-10-16T12:59:00.000-04:00")
  );
  return (
    <Box display="flex" justifyContent="flex-end" gap={0.5}>
      <Typography variant="h9" sx={{ lineHeight: "18px" }}>
        PICK FREEZES IN:
      </Typography>
      <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
        days < 10 ? `0${days}` : days
      }D`}</Typography>
      <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
        hours < 10 ? `0${hours}` : hours
      }H`}</Typography>
      <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
        minutes < 10 ? `0${minutes}` : minutes
      }M`}</Typography>
      <Typography variant="h9" sx={{ lineHeight: "18px" }}>{`${
        seconds < 10 ? `0${seconds}` : seconds
      }S`}</Typography>
    </Box>
  );
};

export default PickemScrolFreezTime;

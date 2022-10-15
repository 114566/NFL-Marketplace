import { Box, Typography } from "@mui/material";
import { getMonth, intervalToDuration } from "date-fns";
import React, { Fragment, useEffect, useState } from "react";
import "./style.css";

const Countdown = () => {
  const [countdown, setCountdown] = useState(0);
  //const [sundaymilidate, setSundayDate] = useState(0);
  const [statevalue, setstatevalue] = useState(0);
  useEffect(() => {
    
    const interval = setInterval(() => {
      
      const currentDate = new Date(new Date().toLocaleString('en', { timeZone: 'America/New_York' }));
      var currentDay = currentDate.getDay();
      var currentHour = currentDate.getHours();
      var currentMinute = currentDate.getMinutes();
      
      //console.log ("d:" + currentDay + " h:" + currentHour + " m:" + currentMinute);
      var datas;
      
      if (currentDay == 0)
        currentDay = 7;
        
      const sundaymilisecond = currentDate.getTime() + (86400000 * (7 - currentDay));
      const sundaydate = new Date(sundaymilisecond);
      const month = sundaydate.getMonth() + 1;
      const day = sundaydate.getDate();
      const fulldata = sundaydate.getFullYear() + "-" + month + "-" + day + " " + "12:59:59 GMT-0400" + " " + "(Eastern Daylight Time)";
     // setSundayDate(fulldata);
      
      //console.log("day:" + currentDay + " " + day + " " + fulldata);
      
      var Days;
      var Hours;
      var Minutes;
      var Seconds; 

      
      if ((currentDay == 7) && (currentHour >= 13)) {
        
        Days = "0";
        Hours = "0"
        Minutes = "0"
        Seconds = "0";
       // console.log("sunday after 1");
        
        setstatevalue({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
        setCountdown({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
      } else if (currentDay == 1) {
        Days = "0";
        Hours = "0"
        Minutes = "0"
        Seconds = "0";
        //console.log("Monday");
        
        setstatevalue({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
        setCountdown({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
        
      } else if ((currentDay == 2) && (currentHour < 2)) {
        Days = "0";
        Hours = "0"
        Minutes = "0"
        Seconds = "0";
       // console.log("Tuesday before 2am");
        
        setstatevalue({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
        setCountdown({ 'Days' : '0', 'Hours' : '0', 'Minutes' : '0', 'Seconds' : '0' })
        
      
     } else {
       // console.log ("normal countdown ");
        const { days, hours, minutes, seconds } = intervalToDuration({
          start: new Date(),
          end: new Date(fulldata),
        });
        Days = days;
        Hours = hours;
        Minutes = minutes;
        Seconds = seconds;
        setstatevalue({ 'Days' : Days, 'Hours' : Hours, 'Minutes' : Minutes, 'Seconds' : Seconds })
        setCountdown({ 'Days' : Days, 'Hours' : Hours, 'Minutes' : Minutes, 'Seconds' : Seconds })
        
      }
      
      
      
      
      //setCountdown({ 'Days' : Days}, Hours, Minutes, Seconds });
      
      
    //  console.log(Days + " " + Hours + " " + Minutes + " " + Seconds);
      },1000);
      return () => clearInterval(interval);
    }, []);
     
  const countdownArr = Object.keys(countdown);
  return (
    <div className="pick-freezes-counter">
      <Box
        display="flex"
        width="80%"
        justifyContent="space-evenly"
        className="m-auto"
      >
        {countdownArr.map((count, index) => {
          return (
            <Fragment key={index}>
              <Box
                display="flex"
                alignItems="center"
                style={{ justifyContent: "center" }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="h2">
                    {countdown[count] >= 10
                      ? countdown[count]
                      : `0${countdown[count]}`}
                  </Typography>
                  <Typography variant="body2" style={{ minWidth: "70px" }}>
                    {count}
                  </Typography>
                </Box>
              </Box>
              {countdownArr.length > index + 1 && (
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Typography style={{ paddingRight: '10px', marginLeft: '-10px' }} variant="h2">{' '}:</Typography>
                </Box>
              )}
            </Fragment>
          );
        })}
      </Box>
    </div>
  );
};

export default Countdown;

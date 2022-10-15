import { Box, MenuItem, Select, Typography } from "@mui/material";
import MyNftDetailsTeam from "components/common/MyNftDetailsTeam";
import React from "react";
import { useState } from "react";
import { AvailableTeams } from "../const";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AvailableTeam = ({ teams }) => {
  // console.log('Teams: ', teams);

  const [value, setValue] = useState(AvailableTeams[0].id);

  const mobileAvailableTeams = AvailableTeams.find(
    (item) => item.id === value
  )?.value;

  const indexById = (arr, fid) => {
    let result = 0;

    arr.map((obj, index) => {
      if (parseInt(obj.id) === fid) {
        result = index;
      }
    });
    // console.log('Index: ', result)
    return result;
  };

  return (
    <Box mb={20}>
      <Typography variant="h6" pb={5}>
        Available Teams
      </Typography>
      <Box
        id="11111"
        sx={{ display: ["none", "flex", "flex"], gap: { xs: 10, sm: 7 } }}
        flexWrap="wrap"
        width={0.98}
      >
        {AvailableTeams.map((staticTeams) => (
          <Box
            key={staticTeams.id}
            width={250}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Typography>{staticTeams.name}</Typography>
            {staticTeams?.value?.map((item, index) => (
              <Box key={index}>
                {/* {item.id} - 
                {teams[indexById(teams, item.id)].name} */}

                <MyNftDetailsTeam
                  minWidth={"200px"}
                  item={teams[indexById(teams, item.id)]}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: ["flex", "none"], flexDirection: "column", gap: 2 }}>
        <Select
          // endAdornment={<KeyboardArrowDownIcon/>}
          IconComponent={() => <KeyboardArrowDownIcon />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          displayEmpty
          sx={{
            borderRadius: 1,
            border: 1,
            borderColor: "#383e55",
            width: 1,
            "& .MuiSelect-select": {
              pl: 1,
            },
            // "& .css-i2vjd1-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{
            //   border:"none"
            // },
            "& .css-1vfy7zx-MuiSvgIcon-root-MuiSelect-icon": {
              display: "none",
            },
          }}
        >
          {AvailableTeams.map((item) => (
            <MenuItem value={item.id} key={item.id}>
              <Typography
                variant="headerTitle2"
                sx={{ color: "rgba(255, 255, 255, 0.75)" }}
              >
                {item.name}
              </Typography>
            </MenuItem>
          ))}
        </Select>

        {mobileAvailableTeams?.map((item) => (
          <Box key={item.id}>
            <MyNftDetailsTeam
              minWidth={"200px"}
              item={teams[indexById(teams, item.id)]}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AvailableTeam;

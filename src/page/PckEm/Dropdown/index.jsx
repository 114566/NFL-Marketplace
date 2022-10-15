import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ myNftList, tokenId, disable }) => {
    const navigate = useNavigate();

  const [value, setValue] = useState(tokenId);
  const [stateValue, setStatevalue] = useState('');
  const handleaction = (e) => {
    const newValue = myNftList.filter(function (el) {
      
      return el.tokenId == e.target.value;
    })
    const secondvalue = String(newValue[0].tokenId).padStart(5, '0');
    if (newValue) {
      setStatevalue(newValue[0].name + " " + secondvalue);
    }
    window.location.replace(`/collection/pickem/${e.target.value}`);
  }
  // const AvailableTeams = [
  //   {
  //     id: 2,
  //     name: "NE Patriots 25938",
  //   },
  //   {
  //     id:3,
  //     name:"hello"
  //   }
  // ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: "200px",
      }}
      width={0.9}
    >
      <Select
        variant="standard"
        IconComponent={KeyboardArrowDownIcon}
        value={value}
        onChange={handleaction}
        disableUnderline
        disabled={disable}
        renderValue={(value) => (
          <Typography variant="h5">
            {
              stateValue !== '' ? stateValue : myNftList.find((item) => item.tokenId === value).name + " " + String(value).padStart(5, '0') 
            }
          </Typography>
        )}
        sx={{
          borderRadius: 1,
          border: 1,
          borderColor: "#3359c8",
          width: 1,
          "& .MuiSelect-select": {
            pl: 1,
          },
          "& .css-174uyoc-MuiSvgIcon-root-MuiSelect-icon": {
            color: "white",
          },
          "& .css-1ppy258-MuiSvgIcon-root-MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        {myNftList?.map((nftListItem, index) => (
          <MenuItem name='asdf' value={nftListItem.tokenId} key={index}>
            <Typography
              //
              sx={{ color: "white", fontWeight: 500 }}
            >
               {nftListItem.name} - {String(nftListItem.tokenId).padStart(5, '0')}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default Dropdown;

import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BudlightImage from "../../images/dashboard/BudlightImage.png";
import { LongerStreakLogo } from "../../assets/Icons";
import Footer from "components/common/Footer";
import AccountsImage from "components/common/accounts";
import { useAuth } from '../../hooks/auth';

const Dashboard = () => {

  return (
    <>
      <Box sx={{ height: 1 }} display="flex" flexDirection="column">
        <AccountsImage />
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;

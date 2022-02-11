import React from "react";

// material
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// ---------------------------- //
const RootStyle = styled(Box)(({ theme }) => ({
  padding: 10,
  fontSize: 11,
  display: "flex",
  alighItems: "center",
  justifyContent: "center",
}));
function FooterComponent() {
  return <RootStyle> © Copyright by Phoudthavisack</RootStyle>;
}

export default FooterComponent;

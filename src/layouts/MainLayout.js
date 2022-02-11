import React from "react";
// material
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// router
import { Outlet } from "react-router-dom";
// components
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ContainerStyle from "../components/ContainerStyle";
// --------------------------- //

function MainLayout() {
  return (
    <>
      <ContainerStyle>
        <NavbarComponent />
      </ContainerStyle>

      <ContainerStyle>
        <Box>
          <Outlet />
        </Box>
      </ContainerStyle>

      <ContainerStyle>
        <FooterComponent />
      </ContainerStyle>
    </>
  );
}

export default MainLayout;

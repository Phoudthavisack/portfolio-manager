import React from "react";
// material
import { Container } from "@mui/material";
// constants
import { COLOR_THEME } from "../constants";
// ---------------------- //
function ContainerStyle({ children }) {
  return (
    <Container
      sx={{
        width: { md: 900, sm: "100%", xs: "100%" },
        p: 0,
        // border: `1px dashed ${COLOR_THEME?.[0]}`,
      }}
    >
      {children}
    </Container>
  );
}

export default ContainerStyle;

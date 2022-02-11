import React from "react";
// material
import { Container } from "@mui/material";
// ---------------------- //
function ContainerStyle({ children }) {
  return (
    <Container
      sx={{
        width: { md: 900, sm: "100%", xs: "100%" },
        p: 0,
        border: "1px dashed #000",
      }}
    >
      {children}
    </Container>
  );
}

export default ContainerStyle;

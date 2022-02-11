import React from "react";
// material
import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
// components
import ItemComponent from "../components/ItemComponent";
// ------------------------ //
const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "pink",
  padding: 10,
}));
const SectionBox = styled(Box)(({ theme }) => ({
  border: "1px dashed #000",
}));
function HomePage() {
  return (
    <RootStyle>
      {/* Section 1 */}
      <SectionBox
        sx={{
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
          Welcome to my portfolio
        </Typography>
        <Typography sx={{ fontSize: 10 }}>
          Nostrud duis ullamco aliqua nostrud deserunt irure et.
        </Typography>
      </SectionBox>
      {/* Section 1 */}
      <SectionBox
        sx={{
          display: "flex",
          gap: 2,
          p: 1,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box sx={{ minWidth: 280, height: 200, border: "1px dashed #000" }}>
          <img src="" alt="" />
        </Box>
        <Typography sx={{ fontSize: 10 }}>
          Laborum consectetur aliqua nulla do sint proident veniam cupidatat in
          mollit. Qui eu ad laboris nisi ullamco aute ipsum dolore non.
          Voluptate duis velit adipisicing ullamco sint laborum do et. Sunt
          culpa quis culpa officia sit exercitation excepteur dolor sunt
          incididunt dolore eiusmod.
        </Typography>
      </SectionBox>
      {/* Section 1 */}
      <SectionBox
        sx={{
          display: "grid",
          gap: 2,
          p: 1,
          gridTemplateColumns: {
            md: "repeat(4,1fr)",
            sm: "repeat(3,1fr)",
            xs: "repeat(2,1fr)",
          },
        }}
      >
        {[1, 2, 3, 4].map((e) => (
          <Box sx={{ height: 200, border: "1px dashed #000" }}>
            <ItemComponent />
          </Box>
        ))}
      </SectionBox>
    </RootStyle>
  );
}

export default HomePage;

import React, { useEffect, useState } from "react";
// material
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
// components
import ItemComponent from "../components/ItemComponent";
// constantss
import { COLOR_THEME } from "../constants";
// images
import profileImage from "../images/profile.jpeg";
import _404Image from "../images/404.jpeg";
// data
import products from "../data/products";
// ------------------------ //
const RootStyle = styled(Box)(({ theme }) => ({
  // backgroundColor: "pink",
  padding: 10,
}));
const SectionBox = styled(Box)(({ theme }) => ({
  // border: "1px dashed #000",
  backgroundColor: COLOR_THEME?.[3],
  marginBottom: 10,
  borderRadius: 4,
  boxShadow: "3px 3px 3px rgba(0,0,0,0.05)",
}));
function HomePage() {
  // state
  const [dataList, setDataList] = useState([]);

  // useEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://raw.githubusercontent.com/Phoudthavisack/phoudthavisack/main/sum.json"
        );
        setDataList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <RootStyle>
      {/* Section 1 */}
      <SectionBox
        sx={{
          p: 1,
          textAlign: "center",
          backgroundColor: "#FBAB7E",
          backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
          color: "rgba(255,255,255,0.8  )",
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
        <Box
          sx={{
            minWidth: 280,
            height: 200,
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <img
            src={profileImage}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
      <Box
        sx={{
          display: "grid",
          columnGap: "10px",
          gridTemplateColumns: {
            md: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            xs: "repeat(1,1fr)",
          },
        }}
      >
        <Box>
          <SectionBox
            sx={{
              p: 1,
              textAlign: "center",
              backgroundColor: "#FBAB7E",
              backgroundImage:
                "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
              Welcome to my portfolio
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
              Nostrud duis ullamco aliqua nostrud deserunt irure et.
            </Typography>
          </SectionBox>
          <SectionBox
            sx={{
              display: "grid",
              gap: 2,
              p: 1,
              gridTemplateColumns: {
                md: "repeat(3,1fr)",
                sm: "repeat(2,1fr)",
                xs: "repeat(2,1fr)",
              },
            }}
          >
            {dataList.map((e, index) => (
              <Box key={index}>
                <ItemComponent src={_404Image} />
                <Typography>Certificate</Typography>
              </Box>
            ))}
          </SectionBox>
        </Box>
        <SectionBox
          sx={{
            background: "none",
            boxShadow: "none",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: {
              md: "repeat(3,1fr)",
              sm: "repeat(2,1fr)",
              xs: "repeat(2,1fr)",
            },
          }}
        >
          {products.map((e, index) => (
            <Box
              key={index}
              style={{
                boxShadow: "3px 3px 3px rgba(0,0,0,0.05)",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <ItemComponent src={e?.image} />
              <Typography>{e?.name}</Typography>
              <Typography sx={{ fontSize: 10 }}>{e?.description}</Typography>
            </Box>
          ))}
        </SectionBox>
      </Box>
    </RootStyle>
  );
}

export default HomePage;

import { Typography, Box } from "@mui/material";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";

const Categories = () => {
  const boxes = [
    { label: "Phones", icon: <HiOutlineDevicePhoneMobile /> },
    { label: "Computers", icon: <HiOutlineDesktopComputer /> },
    { label: "SmartWatch", icon: <BsSmartwatch /> },
    { label: "Camera", icon: <CiCamera /> },
    { label: "Headphones", icon: <CiHeadphones /> },
    { label: "Gaming", icon: <RiGamepadLine /> },
  ];

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="20px"
        marginLeft="50px"
      >
        <img src="/icons/Rectangle 18.png" />
        <Typography sx={{ color: "var(--offredColor)" }}>Categories</Typography>
      </Box>
      <Box
        marginLeft="40px"
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            marginLeft: "25px",
            fontFamily: "Poppins sans-serif",
            fontWeight: 800,
            fontSize: "30px",
            padding: "20px",
          }}
        >
          Browse By Category
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding:"30px"
        }}
      >
        {boxes.map((box, index) => (
          <Box
            key={index}
            sx={{
              outline: "solid 2px rgba(211, 211, 211, 0.5)",
              width: "150px",
              padding: "20px",
              textAlign: "center",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#DB4444",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                fontSize: "40px",
                justifyContent: "center",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {box.icon}
            </Box>
            <Typography
              padding="10px"
              sx={{
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {box.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;

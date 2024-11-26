import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slidesData = [
    {
      icon: "images/apple.png",
      title: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
      image: "/images/hero.png.png",
    },
    {
      icon: "/icons/samsung.png",
      title: "Samsung Galaxy",
      subtitle: "Exclusive Deals",
      image: "/images/samsung.png",
    },
    {
      icon: "/icons/xiaomi.png",
      title: "Xiaomi Mi",
      subtitle: "Save Big Now",
      image: "/images/xioami1_prev_ui.png",
    },
  ];
  return (
    <Box sx={{ display: "flex", padding: "50px", backgroundColor: "" }}>
      {/* Left Category List */}
      <Box
        sx={{
          width: "25%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <List
          sx={{
            marginTop: "10px",
            marginLeft: "50px",
            fontFamily: "Poppins sans-serif",
            cursor: "pointer",
          }}
        >
          <ListItem>Woman’s Fashion</ListItem>
          <ListItem>Men’s Fashion</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Home & Lifestyle</ListItem>
          <ListItem>Medicine</ListItem>
          <ListItem>Sports & Outdoor</ListItem>
          <ListItem>Baby’s & Toys</ListItem>
          <ListItem>Groceries & Pets</ListItem>
          <ListItem>Health & Beauty</ListItem>
        </List>
      </Box>

      <Box
        sx={{
          width: "70%",
          marginLeft: "25px",
        }}
      >
        <Carousel responsive={responsive}>
          {slidesData.map((slide, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "50%",
                  padding: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "30px",
                    padding: "30px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/icons/apple.png"
                      width="30px"
                      height="50px"
                      alt="Apple"
                      style={{ marginRight: "10px" }}
                    />
                    {slide.title}
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "50px",
                    marginTop: "10px",
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "20px",
                    textDecoration: "underline",
                  }}
                >
                  Shop Now
                </Button>
              </Box>

              <Box>
                <img
                  style={{ maxHeight: "100%", objectFit: "contain" }}
                  src={slide.image}
                  alt="iPhone"
                />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Banner;

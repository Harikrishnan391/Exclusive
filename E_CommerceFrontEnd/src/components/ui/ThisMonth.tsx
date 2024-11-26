import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/utils";
import { Product } from "../../types/Product";
import Cards from "./Cards";

const ThisMonth = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const cardShow = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get<Product[]>("/product/getAll");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const visibleCards = showAll ? products : products.slice(0, cardShow);
  console.log(visibleCards, "visible cards");

  const circleStyle = {
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins sans-serif",
    flexDirection: "column",
  };

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="25px"
        marginLeft="50px"
      >
        <img src="/icons/Rectangle 18.png" />
        <Typography sx={{ color: "var(--offredColor)" }}>This Month</Typography>
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
          Best Selling Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#DB4444",
              paddingX: "10px",
              marginRight: "130px",
              height: "30px",
              color: "white",
              fontFamily: "Poppins sans-serif",
            }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "60px",
          flexWrap: "wrap",
        }}
      >
        {visibleCards.map((product, index) => (
          <Box key={index} sx={{ minWidth: "25%", marginTop: "40px" }}>
            <Cards product={product} />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "90%",
          marginLeft: "50px",
          // backgroundColor: "black",
          backgroundImage: `url('/images/Frame 600.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            // outline: "solid red",
          }}
        >
          <Box sx={{ maxWidth: "50%" }}>
            <Typography
              sx={{
                color: "#00FF66",
                marginBottom: "10px",
                fontSize: "24px",
                fontFamily: "Poppins sans-serif",
              }}
            >
              Categories
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Poppins sans-serif",
                fontSize: "70px",
              }}
            >
              Enhance Your Music Experience
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                gap: "30px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  gap: "40px",
                }}
              >
                <Box sx={circleStyle}>
                  <Typography variant="h5" fontSize="20px" fontWeight="bold">
                    05
                  </Typography>
                  <Typography variant="body2">Hours</Typography>
                </Box>

                <Box sx={{ ...circleStyle }}>
                  <Typography variant="h4" fontWeight="bold" fontSize="20px">
                    05
                  </Typography>
                  <Typography variant="body2">Days</Typography>
                </Box>
                <Box sx={{ ...circleStyle }}>
                  <Typography variant="h4" fontWeight="bold" fontSize="20px">
                    59
                  </Typography>
                  <Typography variant="body2">Minutes</Typography>
                </Box>
                <Box sx={{ ...circleStyle }}>
                  <Typography variant="h4" fontWeight="bold" fontSize="20px">
                    35
                  </Typography>
                  <Typography variant="body2">Seconds</Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  padding: "20px",
                  backgroundColor: "green",
                  width: "170px",
                  marginRight: 30,
                  background: "#00FF66",
                  color: "white",
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              marginTop: "30px",
              alignItems: "center",
              marginRight: "70px",
            }}
          >
            <img
              style={{ width: "100%", maxWidth: "850px", height: "auto" }}
              src="/images/JBL.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThisMonth;

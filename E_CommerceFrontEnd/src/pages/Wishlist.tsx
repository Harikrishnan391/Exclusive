import { Box, Button, Typography } from "@mui/material";
import Cards from "../components/ui/Cards";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import axiosInstance from "../utils/utils";

const Wishlist = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex] = useState(0);
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

  const visibleCards = products.slice(currentIndex, currentIndex + cardShow);

  return (
    <Box sx={{ marginTop: "40px", marginLeft: "100px" }}>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="25px"
        marginLeft="50px"
        justifyContent="space-between"
        sx={{}}
      >
        <Typography sx={{ color: "var(--offredColor)" }}>
          Wishlist(4)
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginRight: "200px", color: "black", borderColor: "black" }}
        >
          Move All To Bag
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "80px",
          marginTop: "40px",
        }}
      >
        {visibleCards.map((product, index) => (
          <Cards product={product} />
        ))}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="25px"
        marginLeft="50px"
        marginTop="40px"
        justifyContent="flex-start"
        sx={{}}
      >
        <img src="/icons/Rectangle 18.png" />
        <Typography sx={{ color: "var(--offredColor)" }}>
          Just For You
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="outlined"
          sx={{ marginRight: "200px", color: "black", borderColor: "black" }}
        >
          See All
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "80px",
          marginTop: "40px",
        }}
      >
        {visibleCards.map((product, index) => (
          <Cards product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default Wishlist;

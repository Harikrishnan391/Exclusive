import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Rating from "@mui/material/Rating";
import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, CardMedia, IconButton, Radio } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { CardsProps } from "../../types/CardProps";
import { useState } from "react";
import axiosInstance from "../../utils/utils";

const Cards: React.FC<CardsProps> = ({ product }) => {
  console.log(product, "prodcut");
  const [value, setValue] = useState<number | null>(2);
  const [quantity] = useState(1);
  const navigate = useNavigate();

  const handleImageClick = (id: number) => {
    console.log("hererrer.............");
    navigate(`/productdetails?id=${id}`);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const response = await axiosInstance.post(`cart/add`, {
        productId: product.id,
        quantity: quantity,
      });

      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
    console.log("Product added to cart:", product);
  };
  return (
    <>
      <Card
        key={product.id}
        onClick={() => handleImageClick(product.id)}
        sx={{
          width: 320,
          height: 400,
          maxWidth: "100%",
          boxShadow: "lg",
          position: "relative",
          "&:hover .add-to-cart-button": {
            opacity: 1,
          },
        }}
      >
        <CardOverflow>
          <AspectRatio ratio="16/12">
            {product?.colors && product.colors.length > 0 ? (
              product.colors.map((color, colorIndex) =>
                color.images.map((img, imageIndex) => (
                  <CardMedia
                    key={`${colorIndex}-${imageIndex}`}
                    component="img"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                    src={img.url}
                    loading="lazy"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(product.id);
                    }}
                  />
                ))
              )
            ) : (
              <p>No images available.</p>
            )}
          </AspectRatio>

          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton aria-label="wishlist" sx={{ bgcolor: "white" }}>
              <FavoriteBorderIcon color="error" />
            </IconButton>
            <IconButton aria-label="view" sx={{ bgcolor: "white" }}>
              <RemoveRedEyeOutlinedIcon />
            </IconButton>
          </Box>

          <Button
            variant="solid"
            size="lg"
            className="add-to-cart-button"
            sx={{
              width: 320,
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              position: "absolute",
              bottom: 0,
              left: "50%",
              backgroundColor: "black",
              transform: "translateX(-50%)",
              zIndex: 2,
              "&:hover": {
                backgroundColor: "black",
              },
            }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </CardOverflow>

        <CardContent sx={{}}>
          <Link
            href=""
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
            sx={{ fontWeight: "md" }}
          >
            {product.name}
          </Link>

          <Typography level="title-lg" sx={{ mt: 0, fontWeight: "xl" }}>
            2,900 THB
          </Typography>
          <Typography level="body-lg">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(evnt, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;

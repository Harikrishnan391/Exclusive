import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import axiosInstance from "../utils/utils";
import { Product } from "../types/Product";
import { useSearchParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCartCount } from "../utils/redux/slices";

const ProductDetails = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [products, setProduct] = React.useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const sizes = ["XS", "S", "M", "L", "XL"];

  const id = searchParams.get("id")
    ? parseInt(searchParams.get("id") as string)
    : null;

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const userId = getUserIdFromToken();
      try {
        if (!id) {
          console.error("Product ID is missing");
        }
        const response = await axiosInstance.get<Product>(
          `/product/getProductById/${id}`
        );
        console.log(response);

        setProduct(response.data);
        if (response.data.colors?.length) {
          setSelectedImage(response.data.colors[0].images[0].url);

          await axiosInstance.get(`/cart/${userId}`);
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, [id]);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const hadleColorClick = (colorId: number, colorImages: { url: string }[]) => {
    setSelectedColor(colorId);
    if (colorImages?.length) {
      setSelectedImage(colorImages[0].url);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const response = await axiosInstance.post(`cart/add`, {
        productId: products.id,
        quantity: quantity,
        selectedColor: selectedColor,
      });
      toast.success("Product Successfully Added !");

      const userId = getUserIdFromToken();
      const cartResponse = await axiosInstance.get(`/cart/${userId}`);
      const items = cartResponse.data.items || [];
      const totalItemCount = items.reduce(
        (count, item) => count + item.quantity,
        0
      );

      dispatch(setCartCount(totalItemCount));
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
    console.log("Product added to cart:", products);
  };

  //
  type ColorNames =
    | "Black Titanium"
    | "White Titanium"
    | "Desert Titanium"
    | "Natural Titanium"
    | "Obsidian"
    | "Porcelain"
    | "Wintergreen";

  const colorMap: Record<ColorNames, string> = {
    "Black Titanium": "#2f2f2f",
    "White Titanium": "#f5f5f5",
    "Desert Titanium": "#c7b299",
    "Natural Titanium": "#d3d3d3",
    Obsidian: "#3a322d",
    Porcelain: "#EFF2F3",
    Wintergreen: "#89e1c9",
    Peony: "#ffabc8",
  };

  return (
    <>
      <Box sx={{ marginLeft: "40px", padding: "35px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/account">
            Account
          </Link>
          <Link underline="hover" color="inherit" href="/">
            {products?.category}
          </Link>
          <Typography sx={{ color: "text.primary" }}>
            {products?.name}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {(selectedColor !== null &&
              products?.colors?.find((color) => color.id === selectedColor)
                ?.images
                ? products?.colors?.find((color) => color.id === selectedColor)
                    ?.images
                : products?.colors?.[0]?.images
              )?.map((img: string, imgIndex: number) => (
                <Card
                  key={imgIndex}
                  sx={{
                    width: "50%",
                    height: "20%",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(img.url)}
                >
                  <CardMedia
                    component="img"
                    image={img.url}
                    alt={`Product Image ${imgIndex + 1}`}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "150px",
                    }}
                  />
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <InnerImageZoom
              src={selectedImage || ""}
              zoomSrc={selectedImage || ""}
              zoomType="hover"
              zoomScale={1.8}
              fullscreenOnMobile
              zoomPreload
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            marginLeft: "90px",
          }}
        >
          <Box
            sx={{
              width: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: "Poppins sans-serif" }}>
              {products?.name}
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant="h5">₹ {products?.price}</Typography>
            <Typography variant="h6">{products?.description}</Typography>
            <Divider variant="middle" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">Colors:</Typography>

              {products?.colors?.map((color) => (
                <Box
                  key={color.id}
                  onClick={() => hadleColorClick(color.id, color.images)}
                  sx={{
                    border: "1px solid",
                    borderColor: "grey.400",
                    borderRadius: "10px",
                    padding: "12px",
                    marginLeft: "16px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: colorMap[color.name],
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: color.name,
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  {console.log(color.name, "color")}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                // outline: "1px solid red",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  outline: "1px solid",
                  borderRadius: "5px",
                }}
              >
                <Button
                  variant=""
                  sx={{ outline: "1px solid black" }}
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Typography sx={{ padding: "20px" }}>{quantity}</Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop: "10px",
                }}
              >
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    padding: "20px",
                    width: "200px",
                    backgroundColor: "error",
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    padding: "20px",
                    width: "200px",
                    backgroundColor: "#f7b80a",
                  }}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                outline: "1px solid  ",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <img
                  src="icons/icon-delivery.png"
                  style={{
                    width: "40px",
                    height: "30px",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                    marginLeft: "20px",
                  }}
                >
                  <Typography variant="h6">Free Delivery</Typography>
                  <Typography>
                    Enter your postal code for Delivery Availability
                  </Typography>
                </Box>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ display: "flex" }}>
                <img src="icons/Icon-return.png" style={{ width: "30px" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                    marginLeft: "20px",
                  }}
                >
                  <Typography variant="h6">Free Delivery</Typography>
                  <Typography>
                    Enter your postal code for Delivery Availability
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="25px"
        marginLeft="50px"
        marginTop="40px"
        justifyContent="flex-start"
      >
        <img src="/icons/Rectangle 18.png" />
        <Typography sx={{ color: "var(--offredColor)" }}>
          Just For You
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
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
        {/* <Cards product={products} /> */}
      </Box>
    </>
  );
};

export default ProductDetails;

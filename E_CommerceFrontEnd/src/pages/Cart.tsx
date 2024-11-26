import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/utils";
import { jwtDecode } from "jwt-decode";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  decrementCartCount,
  incrementCartCount,
  setCartCount,
} from "../utils/redux/slices";

const Cart = () => {
  interface CartItem {
    id: string;
    quantity: number;
    product: {
      id: string;
      price: number;
      name: string;
      colors: Array<{
        id: string;
        images: Array<{ url: string }>;
      }>;
    };
    selectedColor: string;
  }
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [Subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = getUserIdFromToken();

      // console.log(userId, "userId");
      if (userId) {
        try {
          const response = await axiosInstance.get(
            `http://localhost:3000/cart/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );
          const items = response.data.items;
          setCartItems(items);

          const total = items.reduce((acc, item) => {
            return acc + item.product.price * item.quantity;
          }, 0);

          setSubtotal(total);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };

    fetchCartItems();
  }, []);

  const handleIncrement = async (cartItem) => {
    const updateQuantity = cartItem.quantity + 1;
    try {
      await axiosInstance.put("/cart/updateQuanity", {
        productId: cartItem.product.id,
        quantity: updateQuantity,
        selectedColor: cartItem.selectedColor,
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItem.id ? { ...item, quantity: updateQuantity } : item
        )
      );

      setCartItems((prevItems) => {
        const total = prevItems.reduce((acc, item) => {
          return acc + item.product.price * item.quantity;
        }, 0);
        setSubtotal(total);
        return prevItems;
      });

      dispatch(incrementCartCount(1));
    } catch (error) {
      console.log("Error updating quanity", error);
    }
  };

  const handleDelete = async (cartItem) => {
    console.log(cartItem, "cartItem of handleDelete");

    try {
      await axiosInstance.delete(`/cart/remove/${cartItem.id}`);

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== cartItem.id)
      );

      const updatedCartCount = cartItems
        .filter((item) => item.id !== cartItem.id)
        .reduce((count, item) => count + item.quantity, 0);

      dispatch(setCartCount(updatedCartCount));

      toast.success("Product removed from cart!");
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };

  const handleDecrement = async (cartItem) => {
    const updatedQuantity = cartItem.quantity > 1 ? cartItem.quantity - 1 : 1;
    console.log(updatedQuantity, "update quanity");
    try {
      await axiosInstance.put("/cart/decrementQuanity", {
        productId: cartItem.product.id,
        quantity: updatedQuantity,
        selectedColor: cartItem.selectedColor,
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: updatedQuantity }
            : item
        )
      );

      const total = cartItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      setSubtotal(total);

      if (cartItem.quantity > 1) {
        dispatch(decrementCartCount(1));
      }
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, Subtotal } });
  };

  return (
    <Box>
      <Box sx={{ marginLeft: "40px", padding: "60px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: "text.primary" }}>Cart</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ padding: "60px", marginLeft: "40px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ width: "30%" }}>
            Product
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", textAlign: "center" }}>
            Price
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", textAlign: "center" }}>
            Quantity
          </Typography>
          <Typography variant="h6" sx={{ width: "20%", textAlign: "center" }}>
            Subtotal
          </Typography>
        </Box>

        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <Box
              key={cartItem.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              {/* Product Image and Name */}
              <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                {(() => {
                  const selectedColorImages = cartItem.product.colors.find(
                    (color) => color.id === cartItem.selectedColor
                  )?.images;

                  const selectedImageUrl =
                    selectedColorImages && selectedColorImages[0]?.url;

                  return (
                    <img
                      src={
                        selectedImageUrl ||
                        cartItem.product.colors[0]?.images[0]?.url
                      }
                      style={{ maxWidth: "100px", borderRadius: "10px" }}
                      alt="Product Color"
                    />
                  );
                })()}
                <Typography variant="body1" sx={{ marginLeft: "10px" }}>
                  {cartItem?.product.name}
                </Typography>
              </Box>

              {/* Product Price */}
              <Typography
                variant="body1"
                sx={{ width: "20%", textAlign: "center" }}
              >
                ${cartItem.product.price}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "20%",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    marginRight: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "40px",
                  }}
                >
                  {cartItem.quantity}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "30px",
                  }}
                >
                  <KeyboardArrowUpIcon
                    onClick={() => handleIncrement(cartItem)}
                    sx={{ cursor: "pointer", fontSize: "20px" }}
                  />
                  <KeyboardArrowDownIcon
                    onClick={() => handleDecrement(cartItem)}
                    sx={{ cursor: "pointer", fontSize: "20px" }}
                  />
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{ width: "10%", textAlign: "center" }}
              >
                ₹ {cartItem.product.price * cartItem.quantity}
              </Typography>
              <Box sx={{ textAlign: "center", cursor: "pointer" }}>
                <DeleteSweepIcon
                  onClick={() => handleDelete(cartItem)}
                  sx={{ color: "red", fontSize: "24px" }}
                />
              </Box>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              marginTop: "30px",
            }}
          >
            <Typography variant="h6" sx={{ color: "gray" }}>
              Cart is empty
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Box>
            <TextField
              id="outlined-basic"
              label="Coupon Code"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="error"
              sx={{ padding: "15px", marginLeft: "20px" }}
            >
              Apply Coupon
            </Button>
          </Box>

          <Box
            sx={{
              outline: "1px solid black",
              width: "500px",
              height: "400px",
              padding: "20px",
            }}
          >
            <Typography variant="h5">Cart Total</Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid gray",
                  py: 2,
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>Subtotal:</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {Subtotal}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid gray",
                  py: 2,
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>Shipping:</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Free
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>Total:</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {Subtotal}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                sx={{
                  padding: "20px",
                  width: "350px",
                  textAlign: "center",
                  marginLeft: "60px",
                }}
                onClick={handleCheckout}
              >
                Procees to checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
};

export default Cart;

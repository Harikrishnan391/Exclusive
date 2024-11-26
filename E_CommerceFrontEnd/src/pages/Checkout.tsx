import {
  Box,
  Breadcrumbs,
  Button,
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/utils";
import { jwtDecode } from "jwt-decode";

const Checkout = () => {
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const navigate = useNavigate();

  const { cartItems, Subtotal } = location.state || {
    cartItems: [],
    subtotal: 0,
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  };

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const placeOrder = async () => {
    try {
      const addressData = {
        firstName: billingDetails.firstName,
        lastName: billingDetails.lastName,
        companyName: billingDetails.companyName,
        street: billingDetails.street,
        apartment: billingDetails.apartment,
        city: billingDetails.city,
        phoneNumber: billingDetails.phoneNumber,
        email: billingDetails.email,
      };

      console.log(paymentMethod, "paymentMethod");

      // const userId = getUserIdFromToken();

      // const addressResponse = await axiosInstance.post(
      //   `/address/${userId}`,
      //   addressData
      // );

      // const addressId = addressResponse.data.id;

      if (paymentMethod === "Cash on Delivery") {
        const response = await axiosInstance.post("/orders/placeOrder", {
          cartItems,
          paymentMethod,
          total: Subtotal,
          addressId: 1,
        });
      } else if (paymentMethod === "Razorpay") {
        const orderResponse = await axiosInstance.post(
          "/online-payment/create-order",
          {
            total: Subtotal,
          }
        );

        const { razorpayOrderId, total } = orderResponse.data;

        const options = {
          key: key,
          amount: total * 100,
          currency: "INR",
          name: "Your Shop Name",
          description: "Order Payment",
          order_id: razorpayOrderId,
          handler: async function (response) {
            console.log(response, "response");
            const paymentConfirmation = await axiosInstance.post(
              "/online-payment/confirm-payment",
              {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                cartItems: cartItems,
                paymentMethod,
                addressId: 1,
                total: Subtotal,
              }
            );

            console.log(
              "Payment successful and order confirmed",
              paymentConfirmation.data
            );
            alert("Order placed successfully!");
            navigate("/orderSuccess");
          },
          prefill: {
            name: `${billingDetails.firstName} ${billingDetails.lastName}`,
            email: billingDetails.email,
            contact: billingDetails.phoneNumber,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <Box>
      <Box sx={{ marginLeft: "40px", padding: "60px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Account
          </Link>
          <Link underline="hover" color="inherit" href="/">
            My Account
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Product
          </Link>
          <Link underline="hover" color="inherit" href="/">
            View Cart
          </Link>
          <Typography sx={{ color: "text.primary" }}>Checkout</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "40px",
          padding: "60px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, fontFamily: "Poppins sans-serif" }}
          >
            Billing Details
          </Typography>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "500px",
            }}
          >
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              onChange={handleInputChange}
              value={billingDetails.firstName}
            />
            <TextField
              id="companyName"
              name="companyName"
              label="Company Name"
              type="text"
              value={billingDetails.companyName}
              onChange={handleInputChange}
            />
            <TextField
              id="street"
              name="street"
              label=" Street Address*"
              type="text"
              value={billingDetails.street}
              onChange={handleInputChange}
            />
            <TextField
              id="apartment"
              name="apartment"
              label="Apartment, floor, etc. (optional)"
              type="text"
              value={billingDetails.apartment}
              onChange={handleInputChange}
            />
            <TextField
              id="city"
              name="city"
              label="Town/City*"
              type="text"
              value={billingDetails.city}
              onChange={handleInputChange}
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number*"
              type="text"
              value={billingDetails.phoneNumber}
              onChange={handleInputChange}
            />

            <TextField
              id="email"
              name="email"
              label="Email Address*"
              type="email"
              value={billingDetails.email}
              onChange={handleInputChange}
            />
          </form>
          <Box>
            <Checkbox {...label} />
            Save this information for faster check-out next time
          </Box>
        </Box>

        <Box sx={{ padding: "100px", marginRight: "100px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {cartItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  justifyContent: "space-between",
                }}
              >
                {(() => {
                  const selectedColorImages = item.product.colors.find(
                    (color) => color.id === item.selectedColor
                  )?.images;

                  const selectedImageUrl =
                    selectedColorImages && selectedColorImages[0]?.url;

                  return (
                    <img
                      src={
                        selectedImageUrl ||
                        item.product.colors[0]?.images[0]?.url
                      }
                      style={{ maxWidth: "100px", borderRadius: "10px" }}
                      alt="Product Color"
                    />
                  );
                })()}

                <Typography variant="body1"> {item.product.name}</Typography>
                <Typography>₹{item.product.price}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ marginTop: "30px", width: "500px" }}>
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

                py: 2,
              }}
            >
              <Typography sx={{ fontSize: "20px" }}>Total:</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {Subtotal}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <RadioGroup
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <FormControlLabel
                  value="Bank"
                  control={<Radio />}
                  label="Bank"
                />
                <FormControlLabel
                  value="Razorpay"
                  control={<Radio />}
                  label="RazorPay"
                />
                <FormControlLabel
                  value="Cash on Delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </RadioGroup>
              <Box sx={{ marginTop: "30px" }}>
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
            </Box>
            <Button
              variant="contained"
              color="error"
              sx={{ padding: "15px", marginLeft: "0px", marginTop: "30px" }}
              onClick={placeOrder}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;

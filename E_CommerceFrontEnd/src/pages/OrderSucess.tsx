import { Box, Button, Typography } from "@mui/material";

const OrderSucess = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4"> Your Order Successfully Placed</Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "150px", height: "50px" }}
        >
          View Orders
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSucess;

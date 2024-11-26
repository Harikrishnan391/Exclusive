import { Box, Typography } from "@mui/material";

export const Helper = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <img
              src="icons/one.png"
              width="70px"
              height="50px"
              style={{ marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              FREE AND FAST DELIVERY
            </Typography>
            <p>Free delivery for all orders over $140</p>
          </Box>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="icons/two.png"
              width="70px"
              height="50px"
              style={{ marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              24/7 CUSTOMER SERVICE
            </Typography>
            <p>Friendly 24/7 customer support</p>
          </Box>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="icons/three.png"
              width="70px"
              height="50px"
              style={{ marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              MONEY BACK GUARANTEE
            </Typography>
            <p>We reurn money within 30 days</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

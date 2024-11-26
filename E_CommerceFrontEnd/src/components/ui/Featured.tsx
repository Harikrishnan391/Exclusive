import { Box, Button, Typography } from "@mui/material";

const Featured = () => {
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
        <Typography sx={{ color: "var(--offredColor)" }}>Featured</Typography>
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
          New Arrival
        </Typography>
      </Box>
      <Box sx={{ display: "flex", padding: "40px" }}>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "black",
            position: "relative",
            height: "650px",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ height: "50px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                position: "absolute",
                bottom: 6,
                left: "15px",
              }}
            >
              PlayStation 5
              <Typography sx={{ color: "white" }}>
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  color: "white",
                  textDecoration: "underline",
                  textTransform: "none",
                  fontSize: "18px",
                }}
              >
                Shop Now
              </Button>
            </Typography>
          </Box>

          <img src="/images/first.png" />
        </Box>
        {/**womens collection */}
        <Box sx={{ borderRadius: "15px" }}>
          <Box
            sx={{
              marginLeft: "30px",
              display: "flex",
              backgroundColor: "#0D0D0D",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "10px",
                    fontFamily: "Poppins sans-serif",
                  }}
                >
                  Women’s Collections
                </Typography>
                <Typography sx={{ fontSize: "17px", textAlign: "center" }}>
                  Featured woman collections that give you another vibe.
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "",
                    padding: "10px",
                    color: "white",
                    textDecoration: "underline",
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                >
                  Shop Now
                </Button>
              </Box>

              <img
                src="/images/second.png"
                style={{ width: "400px", height: "350px" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "30px",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "270px",
                backgroundColor: "black",
                position: "relative",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img src="images/third.png" style={{ height: "250px" }} />
              </Box>

              <Box
                sx={{
                  position: "absolute", // Absolute positioning
                  top: "50%", // Center vertically
                  left: "20px", // Align to the left with some margin
                }}
              >
                <Typography variant="h5" sx={{ color: "white" }}>
                  Speakers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Amazon wireless speakers
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: "50%",
                height: "270px",
                backgroundColor: "black",
                position: "relative",
                marginLeft: "40px",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img src="images/fourth.png" style={{ height: "250px" }} />
              </Box>

              <Box
                sx={{
                  position: "absolute", // Absolute positioning
                  top: "50%", // Center vertically
                  left: "20px", // Align to the left with some margin
                }}
              >
                <Typography variant="h5" sx={{ color: "white" }}>
                  Perfume
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  GUCCI INTENSE OUD EDP
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    textTransform: "none",
                    fontSize: "18px",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
    </Box>
  );
};

export default Featured;

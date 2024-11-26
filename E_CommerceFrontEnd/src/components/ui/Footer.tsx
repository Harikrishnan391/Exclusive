import Grid from "@mui/material/Grid2";

import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 5,
        marginTop: "40px",
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "20px" }}>
        <Grid container spacing={4} gap={10}>
          {/* About Us Section */}
          <Grid>
            <Typography variant="h6" gutterBottom>
              Exclusive
            </Typography>
            <Typography variant="h6">Subscribe</Typography>
            <p>Get 10% off your first order</p>

            <Box sx={{ marginTop: "10px" }}>
              <TextField
                required
                variant="outlined"
                id="outlined-required"
                sx={{
                  input: { color: "white" }, // Change text color
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" }, // Change border color
                    "&:hover fieldset": { borderColor: "white" }, // Change border on hover
                    "&.Mui-focused fieldset": { borderColor: "white" }, // Change border when focused
                  },
                }}
                placeholder="Enter your email address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src="/icons/icon-send.png"
                        alt="send"
                        style={{ width: "20px", height: "20px" }} // Customize image size
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

          {/* Links Section */}
          <Grid>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <List>
              <ListItem>
                <Link href="#" color="inherit" variant="body2">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/kkd" color="inherit" variant="body2">
                  111 Bijoy sarani, Dhaka,
                  <br /> DH 1515, Bangladesh.
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" variant="body2">
                  exclusive@gmail.com
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" variant="body2">
                  +88015-88888-9999
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Account Us Section */}
          <Grid>
            <Typography variant="h6" gutterBottom>
              Account
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body2">My Account</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Login / Register</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Cart</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Wishlist</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Shop</Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Account Us Section */}
          <Grid>
            <Typography variant="h6" gutterBottom>
              Quick Link
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body2">Privacy Policy</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Terms Of Use</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">FAQ</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Contact</Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Account Us Section */}
          <Grid>
            <Typography variant="h6" gutterBottom>
              Download App
            </Typography>
            <List>
              {/* <ListItem>
                <Typography variant="body2">
                  Email: support@example.com
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">Phone: +1 234 567 890</Typography>
              </ListItem> */}

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{}}>
                  {/** image */}
                  <img src="/icons/Qr Code.png" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    padding: "10px",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <img src="/icons/playstore.png" />
                  </Box>
                  <Box>
                    <img src="/icons/appleStore.png" />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <img src="/icons/Icon-Facebook.png" />
                <img src="/icons/Icon-Twitter.png" />
                <img src="/icons/Insta.png" />
                <img src="/icons/Linkedin.png" />
              </Box>
            </List>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          mt={5}
          textAlign="center"
          borderTop="1px solid white"
          pt={2} // padding-top
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

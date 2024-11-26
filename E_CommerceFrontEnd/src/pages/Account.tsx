import { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MyOrders from "./MyOrders";
import ProfileSettings from "./ProfileSettings";

const Account = () => {
  const [selectedSection, setSelectedSection] = useState<string>("profile");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          marginLeft: "40px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: "text.primary" }}>My Account</Typography>
        </Breadcrumbs>
        <Typography>Harikrishnan</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        <Box sx={{ padding: "40px", width: "350px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, fontFamily: "Poppins sans-serif" }}
          >
            Manage My Account
          </Typography>
          <List>
            <ListItem button onClick={() => handleSectionClick("profile")}>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick("address")}>
              <ListItemText primary="Address Book" sx={{ cursor: "pointer" }} />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick("payment")}>
              <ListItemText primary="My Payment Options" />
            </ListItem>
          </List>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontFamily: "Poppins sans-serif" }}
          >
            Past Order History
          </Typography>
          <List>
            <ListItem button onClick={() => handleSectionClick("returns")}>
       
              <ListItemText primary="My Returns" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleSectionClick("cancellations")}
            >
              <ListItemText primary="My Cancellations" />
            </ListItem>
          </List>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontFamily: "Poppins sans-serif" }}
          >
            My WishList
          </Typography>
        </Box>

        {/* Render content dynamically based on the selected section */}
        <Box
          sx={{
            padding: "30px",
            marginLeft: "10rem",
            width: "100%",
            boxShadow: 3,
            borderRadius: "10px",
          }}
        >
          {selectedSection === "profile" && <ProfileSettings />}

          {selectedSection === "address" && (
            <Typography>Your Address Book Content Here</Typography>
          )}

          {selectedSection === "payment" && (
            <Typography>Your Payment Options Content Here</Typography>
          )}

          {selectedSection === "returns" && <MyOrders />}
          {selectedSection === "cancellations" && (
            <Typography>Your Canceled Orders Content Here</Typography>
          )}

          {selectedSection === "wishlist" && (
            <Typography>Your Wishlist Content Here</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Account;

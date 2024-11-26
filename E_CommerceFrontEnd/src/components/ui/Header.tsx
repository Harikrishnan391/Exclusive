import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context/userContext";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import axiosInstance from "../../utils/utils";
import { jwtDecode } from "jwt-decode";
import { setCartCount } from "../../utils/redux/slices";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

///  Cart Button

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const pages = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Signup", path: "/signup" },
];

const Header = () => {
  const { isAuthenticated, logout } = useContext(UserContext);
  const [CartCount, setCartcount] = useState(0);
  const dispatch = useDispatch();
  const Count = useSelector((state) => state.user.cartCount);

  // console.log(cartCount, "cartcount from redux");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      const userId = getUserIdFromToken();

      if (!userId) return;

      try {
        const response = await axiosInstance.get(`/cart/${userId}`);
        const items = response.data.items || [];
        const totalItemCount = items.reduce(
          (count, item) => count + item.quantity,
          0
        );
        setCartcount(totalItemCount);
        // dispatch(cartcount(CartCount));
        dispatch(setCartCount(totalItemCount));
      } catch (error) {
        console.log(`Error fetching cart count`, error);
      }
    };

    fetchCartCount();
  });

  return (
    <>
      <Box
        position="static"
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "Poppins sans-serif",
            fontWeight: 100,
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none", marginLeft: "20px" }}
          >
            Shop now
          </Button>
        </Typography>

        <FormControl
          sx={{
            width: 100, 
            height: 20, 
            backgroundColor: "white",
            marginLeft: "auto",
          }}
          size="small" 
        >
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value="10"
            sx={{
              fontSize: "0.8rem",
              height: "20px",
              padding: "0px 8px",
            }}
          >
            <MenuItem
              value=""
              sx={{ color: "white", fontSize: "0.8rem" }}
            ></MenuItem>
            <MenuItem value={10} sx={{ fontSize: "0.8rem" }}>
              English
            </MenuItem>
            <MenuItem value={20} sx={{ fontSize: "0.8rem" }}>
              Hindi
            </MenuItem>
            <MenuItem value={30} sx={{ fontSize: "0.8rem" }}>
              malayalam
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Box sx={{ display: "flex", padding: 2, mx: 10 }}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, outline: "2px solid red" }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "black",
                fontWeight: "bold",
              }}
            >
              Exclusive
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ width: "70%" }}
            >
              <Box display="flex">
                {pages.map((page) => (
                  <Link
                    to={page.path}
                    key={page.name}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        minWidth: 100,
                        color: "black",
                        cursor: "pointer",
                        fontFamily: "Poppins sans-serif",
                        fontWeight: 100,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 0,
                }}
              >
                <Search sx={{ mr: 1 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Link to="/wishlist">
                  <FavoriteBorderOutlinedIcon
                    sx={{ color: "black", marginTop: 2, ml: 1 }}
                  ></FavoriteBorderOutlinedIcon>
                </Link>

                <IconButton aria-label="cart">
                  <StyledBadge color="secondary" badgeContent={Count}>
                    <Link to="/cart">
                      <ShoppingCartIcon />
                    </Link>
                  </StyledBadge>
                </IconButton>

                {isAuthenticated ? (
                  <Box sx={{ display: "flex" }}>
                    <Button onClick={logout} sx={{ color: "red" }}>
                      Logout
                    </Button>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Logout onClick={logout} fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : (
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      background: "black",
                    }}
                  >
                    <Button sx={{ color: "white" }}>Login</Button>
                  </Link>
                )}
              </Box>
            </Box>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

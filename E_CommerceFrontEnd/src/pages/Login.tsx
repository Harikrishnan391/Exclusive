import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import axiosInstance from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/context/userContext";

const Login = () => {
  const userContext = useContext(UserContext)!;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setIsAuthenticated } = userContext;

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });

      console.log(response, "response.data");

      localStorage.setItem("token", response.data.access_token);
      setIsAuthenticated(true);

      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Error while Login", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "50%",
              backgroundColor: "#CBE4E8",
              marginRight: "50px",
            }}
          >
            <img src="/images/dl.beatsnoop 1.png" />
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: "150px",
            }}
          >
            <Box sx={{ width: "400px" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Poppins sans-serif", fontSize: "50px" }}
              >
                Log in to Exclusive
              </Typography>
              <Typography sx={{ marginTop: "10px" }}>
                Enter your details below
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0px",
                  gap: "40px",
                  marginTop: "30px",
                }}
              >
                <TextField
                  required
                  id="standard-required"
                  placeholder="Email or Phone Number"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  placeholder="Password"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px",
                  marginTop: "30px",
                }}
              ></Box>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DB4444",
                  height: "56px",
                  textTransform: "none",
                  color: "white",
                  width: "150px",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Link
                sx={{
                  marginLeft: "100px",
                  color: "error.main",
                  cursor: "pointer",
                }}
              >
                Forget Password?
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

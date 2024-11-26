import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/utils";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post(`auth/register`, {
        name,
        email,
        password,
      });

      setName("");
      setEmail("");
      setPassword("");
      toast.success("Registration Successful!");
    } catch (error) {
      console.error("Error Registering user", error);
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
                Create an account
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
                  placeholder="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  placeholder="Email or Phone Number"
                  value={email}
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  placeholder="Password"
                  value={password}
                  variant="standard"
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
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DB4444",
                    height: "56px",
                    textTransform: "none",
                    color: "white",
                  }}
                  onClick={handleLogin}
                >
                  Create Account
                </Button>
                {/** Toast container */}
                <ToastContainer />
                <Button
                  startIcon={<FcGoogle />}
                  variant="outlined"
                  sx={{ height: "56px" }}
                >
                  <Typography sx={{ color: "black" }}>
                    Sign up with Google
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Typography>Already have an account?</Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    fontFamily: "Poppins sans-serif",
                    fontSize: "18px",
                    textDecoration: "underline",
                  }}
                  onClick={handleLoginClick}
                >
                  Log in
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;

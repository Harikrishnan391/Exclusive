import { Box, Button, TextField, Typography } from "@mui/material";

const ProfileSettings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography sx={{ color: "#DB4444", fontWeight: 800 }}>
        Edit Your Profile
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <TextField id="phone" label="Phone" variant="outlined" fullWidth />
      </Box>
      <Typography sx={{ fontWeight: 800 }}>Password Changes</Typography>
      <TextField
        id="current-password"
        label="Current Password"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="new-password"
        label="New Password"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="confirm-password"
        label="Confirm Password"
        variant="outlined"
        fullWidth
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          padding: "20px",
          gap: "10px",
        }}
      >
        <Button variant="outlined" sx={{ padding: "20px" }}>
          Cancel
        </Button>
        <Button variant="contained" color="error" sx={{ width: "200px" }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSettings;

import { Textarea } from "@mui/joy";
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";

const Contact = () => {
  return (
    <>
      <Box sx={{ marginLeft: "50px", padding: "35px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>

          <Typography sx={{ color: "text.primary" }}>Contact</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          // outline: "solid red",
          padding: "100px",

          gap: 10,
        }}
      >
        <Box
          sx={{
            padding: "100px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <img src="/icons/contact/icons-phone.png" />
            <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: 600 }}>
              Call To Us
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              marginTop: "20px",
            }}
          >
            <Typography> We are available 24/7, 7 days a week.</Typography>
            <Typography> Phone: +8801611112222</Typography>
            <Divider variant="middle" />
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <img src="/icons/contact/icons-mail.png" />
            <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: 600 }}>
              Write To US
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              marginTop: "20px",
            }}
          >
            <Typography>
              Fill out our form and we will contact you within 24 hours.
            </Typography>
            <Typography>Emails: customer@exclusive.com</Typography>
            <Typography>Emails: customer@exclusive.com</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "100px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            flexDirection: "column",
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <TextField id="filled-basic" label="Your Name *" variant="filled" />
            <TextField
              id="filled-basic"
              label="Your Email *"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Your Phone *"
              variant="filled"
            />
          </Box>
          <Textarea
            placeholder="Your Massage"
            variant="soft"
            sx={{ width: "800px", height: "200px", marginTop: "50px" }}
            required
          />
          <Button
            sx={{
              width: "150px",
              padding: 2,
              marginLeft: 80,
              marginTop: 5,
              backgroundColor: "#DB4444",
            }}
            variant="contained"
          >
            Send Massage
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

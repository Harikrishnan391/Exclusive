import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import CardActionArea from "@mui/material/CardActionArea";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Helper } from "../components/ui/Helper";
import Link from "@mui/material/Link";

const About = () => {
  const cardData = [
    {
      title: "Tom Cruise",
      description: "Founder & Chairman",
      image: "/icons/about/Image46.png",
    },
    {
      title: "Emma Watson",
      description: "Managing Director",
      image: "/icons/about/image 51.png",
    },
    {
      title: "Will Smith",
      description: "Product Designer",
      image: "/icons/about/image 47.png",
    },
  ];
  return (
    <>
      <Box sx={{ marginLeft: "150px", padding: "35px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" underline="hover">
            Home
          </Link>
          <Typography sx={{ color: "text.primary" }}>About</Typography>
        </Breadcrumbs>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
            padding: "150px",
            marginRight: "10px",
          }}
        >
          <Box
            sx={{
              marginLeft: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "50px",
                fontFamily: "Poppins sans-serif",
                fontWeight: 600,
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins sans-serif", marginTop: "30px" }}
            >
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins sans-serif", marginTop: "20px" }}
            >
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src="/images/Side Image.png" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            width: "270px",
            height: "230px",
            outline: "1px solid ",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/icons/about/Services.png" width={80} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              10.5k{" "}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 100 }}>
              Sallers active our site
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "270px",
            height: "230px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#DB4444",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/icons/about/Services2.png" width={80} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              33k
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 100 }}>
              Mopnthly Produduct Sale
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "270px",
            height: "230px",
            outline: "1px solid ",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/icons/about/Services3.png" width={80} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              10.5k{" "}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 100 }}>
              Sallers active our site
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "270px",
            height: "230px",
            outline: "1px solid ",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/icons/about/Services4.png" width={80} />
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              10.5k{" "}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 100 }}>
              Sallers active our site
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
      >
        <Box sx={{ display: "flex", gap: 5 }}>
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardActionArea>
                <CardMedia
                  sx={{ px: "80px" }}
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    fontFamily="Poppins sans-serif"
                    fontWeight="600"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CiTwitter />
                    <FaInstagram />
                    <CiLinkedin />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Helper />
      </Box>
    </>
  );
};

export default About;

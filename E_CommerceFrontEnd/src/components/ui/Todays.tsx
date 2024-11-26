import { Box, Button, Grid, Typography } from "@mui/material";
// import Grid from '@mui/material/Grid2';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import axiosInstance from "../../utils/utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Todays = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // useEffect(() => {
  //   const endTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
  //   const calculateTimeLeft = () => {
  //     const now = new Date().getTime();
  //     const distance = endTime - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     setTimeLeft({ days, hours, minutes, seconds });
  //   };

  //   const timerId = setInterval(calculateTimeLeft, 1000);

  //   return () => clearInterval(timerId);
  // }, []);

  const cardShow = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get<Product[]>("/product/getAll");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // const visibleCards = products.slice(currentIndex, currentIndex + cardShow);

  const handleNext = () => {
    if (currentIndex < products.length - cardShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        padding="35px"
        marginLeft="50px"
      >
        <img src="/icons/Rectangle 18.png" />
        <Typography color="#DB4444">Today's</Typography>
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
            marginTop: "20px",
          }}
        >
          Flash Sales
        </Typography>

        <Box
          marginRight="50%"
          sx={{ fontFamily: "Poppins sans-serif", padding: "30px" }}
        >
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                <Typography variant="subtitle1">Days</Typography>{" "}
                {timeLeft.days}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">:</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                <Typography variant="subtitle1">Hours</Typography>{" "}
                {timeLeft.hours}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">:</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                <Typography variant="subtitle1">Minutes</Typography>
                {timeLeft.minutes}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">:</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                <Typography variant="subtitle1">Seconds</Typography>
                {timeLeft.seconds}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", marginRight: "50px", padding: "10px" }}>
          <IoArrowBackCircleOutline
            size={40}
            height={20}
            style={{ color: "gray" }}
            onClick={handlePrev}
          />
          <IoArrowForwardCircleOutline
            size={40}
            height={20}
            style={{ outline: "none", color: "gray" }}
            onClick={handleNext}
          />
        </Box>
      </Box>
      <Box sx={{ padding: "25px" }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                margin: "0 20px",
              }}
            >
              <Cards product={product} />
            </Box>
          ))}
        </Carousel>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#DB4444",
            width: "200px",
            color: "white",
            fontFamily: "Poppins sans-serif",
            variant: "contained",
          }}
        >
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default Todays;

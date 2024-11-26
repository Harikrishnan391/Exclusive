import Banner from "../components/ui/Banner";
import Categories from "../components/ui/Categories";
import Featured from "../components/ui/Featured";

import ThisMonth from "../components/ui/ThisMonth";
import Todays from "../components/ui/Todays";

const Home = () => {
  return (
    <>
      <Banner />
      <Todays />
      <Categories />
      <ThisMonth />
      <Featured />
    </>
  );
};

export default Home;

import AddBanner from "./addBanner/AddBanner";
import Banner from "./banner/Banner";
import Speciality from "./speciality/Speciality";
import TopDoctors from "./topDoctors/TopDoctors";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Speciality></Speciality>
      <TopDoctors></TopDoctors>
      <AddBanner></AddBanner>
    </div>
  );
};

export default HomePage;

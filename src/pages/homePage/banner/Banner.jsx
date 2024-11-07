import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[#5F6FFF]">
      <div className="md:flex justify-between items-center px-10">
        <div className="text-white space-y-3">
          <h1 className="md:w-[500px]  text-5xl font-bold">
            Book Appointment With Trusted Doctors
          </h1>
          <p className="md:w-[450px]">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <a href="#" className="btn rounded-full px-8">
            Book appointment <FaArrowRightLong className="ml-2" />
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730980799/doc-header-img_1_swh92o.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

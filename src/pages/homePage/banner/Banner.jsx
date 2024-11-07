import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[#5F6FFF]">
      <div className="md:flex justify-between items-center px-10">
        <div className="text-white space-y-5">
          <h1 className="md:w-[500px]  text-5xl font-bold">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex gap-4">
            <div className="avatar-group -space-x-5 rtl:space-x-reverse">
              <div className="avatar">
                <div className="size-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="size-10">
                  <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730986436/image_87_1_l6map2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="size-10">
                  <img src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730986532/image_388_5_bpg4yd.png" />
                </div>
              </div>
            </div>
            <p className="md:w-[450px]">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
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

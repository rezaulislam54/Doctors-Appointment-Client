const AddBanner = () => {
  return (
    <div className="bg-[#5F6FFF] rounded-xl flex px-4 md:px-8 lg:px-12">
      <div className=" flex-1 py-8 sm:py-10 md:py-16 lg:py-24 pl-5 space-y-2 lg:space-y-4">
        <p className="text-white text-xl md:text-4xl lg:text-5xl font-bold">
          Book Appointment{" "}
        </p>
        <p className="text-white text-xl md:text-4xl lg:text-5xl font-bold">
          With 100+ Trusted Doctors
        </p>
        <button className="bg-[#FFFFFF] px-6 py-2 rounded-full">
          Create account
        </button>
      </div>
      <div className="relative w-1/2 lg:w-[370px]">
        <img
          className="absolute bottom-0 right-5"
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1731169033/appointment-doc-img_s6dhe4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddBanner;

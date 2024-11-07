const Speciality = () => {
  return (
    <div className="my-14">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-3">Find by Speciality </h1>
        <p className="md:w-[500px] mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730983464/Group_4134_zjmc8y.png"
              alt=""
            />
          </div>
          <p>General physician</p>
        </div>
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730983467/Group_4128_mgg0hs.png"
              alt=""
            />
          </div>
          <p>Gynecologist</p>
        </div>
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730983471/Group_4131_cytj2h.png"
              alt=""
            />
          </div>
          <p>Dermatologist</p>
        </div>
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730983475/Group_4133_ozvttd.png"
              alt=""
            />
          </div>
          <p>Pediatricians</p>
        </div>
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730983479/Group_ikj3a6.png"
              alt=""
            />
          </div>
          <p>Neurologist</p>
        </div>
        <div>
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#AFC1DC] to-[#E2E5ED] flex items-center justify-center rounded-full">
            <img
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1730985349/Vector_1_w07adt.png"
              alt=""
            />
          </div>
          <p>Gastroenterologist</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;

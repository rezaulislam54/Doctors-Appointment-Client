import { Link } from "react-router-dom";
import { specialityData } from "../../../assets/assets_frontend/assets";
const Speciality = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-10">
      <h1 className="text-3xl font-bold mb-2">Find by Speciality</h1>
      <p className="sm:w-1/3 md:w-[500px]">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center items-center gap-6 mt-8">
        {specialityData.map((item, index) => (
          <Link
            className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            to={`/doctors/${item.speciality}`}
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} />
            <h3>{item.speciality}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;

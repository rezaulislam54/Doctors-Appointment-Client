import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../../assets/assets_frontend/assets";
import { useEffect, useState } from "react";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterData, setfilterData] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setfilterData(doctors?.filter((Doc) => Doc.speciality === speciality));
    } else {
      setfilterData(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="my-12">
      <h1 className="font-medium">Browse through the doctors specialist.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:gap-5 mt-8">
        <div className="col-span-1 space-y-4">
          <div
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            General physician
          </div>
          <div
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            Gynecologist
          </div>
          <div
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            Dermatologist
          </div>
          <div
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            Pediatricians
          </div>
          <div
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            Neurologist
          </div>
          <div
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className="border border-[#B4B4B4] rounded-md pl-3 py-1 cursor-pointer"
          >
            Gastroenterologist
          </div>
        </div>
        <div className="col-span-5 md:col-span-2 lg:col-span-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filterData?.map((item, index) => (
            <div
              className="border-2 border-[#C9D8FF] rounded-lg cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <div className="bg-[#EAEFFF] rounded-t-lg">
                <img src={item.image} alt="" />
              </div>
              <div className="p-3">
                <div className="flex gap-3 items-center">
                  <p className="w-2 h-2 bg-[#0FBF00] rounded-full"></p>
                  <p className="text-[#0FBF00]">Available</p>
                </div>
                <h3 className="font-medium text-xl">{item.name}</h3>
                <p>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

import { useNavigate, useParams } from "react-router-dom";
// import { doctors } from "../../assets/assets_frontend/assets";
import { useContext, useEffect, useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import { AuthContext } from "../../provider/AuthProvider";

const Doctors = () => {
    const { Doctors } = useContext(AuthContext);
  const { speciality } = useParams();
  const [filterData, setfilterData] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setfilterData(Doctors?.filter((Doc) => Doc.speciality === speciality));
    } else {
      setfilterData(Doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Doctors, speciality]);

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
            <DoctorCard key={index} item={item}></DoctorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

import { doctors } from "../../../assets/assets_frontend/assets";
import DoctorCard from "../../../components/DoctorCard";
const TopDoctors = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
        {doctors?.slice(0, 10)?.map((item, idex) => (
          <DoctorCard key={idex} item={item}></DoctorCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#EAEFFF] px-8 py-1 mt-5 rounded-full border-2">
          more
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;

import { Link } from "react-router-dom";

const DoctorCard = ({ item }) => {
  return (
    <Link
      to={`/doctor/${item._id}`}
      className="border-2 border-[#C9D8FF] rounded-lg cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
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
    </Link>
  );
};

export default DoctorCard;

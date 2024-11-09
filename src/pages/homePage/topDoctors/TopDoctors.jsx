import { doctors } from "../../../assets/assets_frontend/assets";
const TopDoctors = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
        {doctors?.slice(0, 10)?.map((item, idex) => (
          <div
            className="border-2 border-[#C9D8FF] rounded-lg cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={idex}
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
      <div className="flex justify-center items-center">
        <button className="bg-[#EAEFFF] px-8 py-1 mt-5 rounded-full border-2">
          more
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;

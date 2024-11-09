import { doctors } from "../../assets/assets_frontend/assets";
const Doctors = () => {
  return (
    <div className="my-12">
      <h1 className="font-medium">Browse through the doctors specialist.</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-5 mt-8">
        <div className="col-span-1 space-y-4">
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            General physician
          </div>
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            Gynecologist
          </div>
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            Dermatologist
          </div>
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            Pediatricians
          </div>
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            Neurologist
          </div>
          <div className="border border-[#B4B4B4] rounded-md pl-3 py-1">
            Gastroenterologist
          </div>
        </div>
        <div className="col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {doctors.map((item, index) => (
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

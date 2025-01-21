import { useLoaderData } from "react-router-dom";
// import { doctors } from "../../assets/assets_frontend/assets";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const doctor = useLoaderData();
  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState("");

  // const fetchDocInfo = () => {
  //   const doctor = doctors.find((doc) => doc._id === docId);
  //   setdocData(doctor);
  // };

  const getAvailableSlots = async () => {
    setdocSlots([]);

    // geetting current Date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // geetting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date wih index
      let endTime = new Date();
      endTime.setDate(today.getDate() + 1);
      endTime.setHours(21, 0, 0, 0);

      // setting hours

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2 digits",
          minute: "2 digits",
        });

        // add slots to arry
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment current time by 30 minites
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setdocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={doctor?.image}
          alt=""
        />
        <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <div className="flex gap-2 items-center">
            <h1 className="text-4xl font-semibold ">{}</h1>
            <img
              className="w-6"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1733842215/download_gi5a9n.svg"
              alt=""
            />
          </div>
          <p className="flex gap-4 my-3">
            {doctor?.degree} - {doctor?.name}
            <span className="border rounded-full px-2">
              {doctor?.experience}
            </span>
          </p>
          <div>
            <p className="flex gap-2">
              <span className="font-semibold mb-1">About</span>
              <img
                src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1733842798/download_1_psbwtw.svg"
                alt=""
              />
            </p>
            <p className="max-w-[700px]">{doctor?.about}</p>
          </div>
          <h3 className="mt-4 text-gray-600 font-medium">
            Appointment fee: {doctor?.fees}
          </h3>
        </div>
      </div>

      <div>
        <h1>Booking slots</h1>
        <div></div>
      </div>
    </div>
  );
};

export default CardDetails;

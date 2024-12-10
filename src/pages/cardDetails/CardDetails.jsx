import { useParams } from "react-router-dom";
import { doctors } from "../../assets/assets_frontend/assets";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const { docId } = useParams();
  console.log(docId);

  const [docData, setdocData] = useState(null);

  const fetchDocInfo = () => {
    const doctor = doctors.find((doc) => doc._id === docId);
    setdocData(doctor);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={docData?.image}
          alt=""
        />
        <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <div className="flex gap-2 items-center">
            <h1 className="text-4xl font-semibold ">Dr. Richard James</h1>
            <img
              className="w-6"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1733842215/download_gi5a9n.svg"
              alt=""
            />
          </div>
          <p className="flex gap-4 my-3">
            MBBS - General physician{" "}
            <span className="border rounded-full px-2">4 Years</span>
          </p>
          <div>
            <p className="flex gap-2">
              <span className="font-semibold mb-1">About</span>
              <img
                src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1733842798/download_1_psbwtw.svg"
                alt=""
              />
            </p>
            <p className="max-w-[700px]">
              Dr. Davis has a strong commitment to delivering comprehensive
              medical care, focusing on preventive medicine, early diagnosis,
              and effective treatment strategies. Dr. Davis has a strong
              commitment to delivering comprehensive medical care, focusing on
              preventive medicine, early diagnosis, and effective treatment
              strategies.
            </p>
          </div>
          <h3 className="mt-4 text-gray-600 font-medium">
            Appointment fee: $50
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

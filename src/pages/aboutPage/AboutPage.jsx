const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl my-10">
        ABOUT <span className="font-medium">US</span>
      </h1>
      <div className="md:flex md:gap-6 lg:gap-12 mx-4">
        <img
          className="md:max-w-[500px] "
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1733751387/about_bnsir7.png"
          alt=""
        />
        <div className="py-4">
          <p className="lg:mr-36">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <p className="lg:mr-36 my-6">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you`&apos;`re booking your first appointment or
            managing ongoing care, Prescripto is here to support you every step
            of the way.
          </p>

          <h1 className="text-xl font-semibold my-6">Our Vision</h1>
          <p className="lg:mr-36">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="mt-8 mb-20 mx-4">
        <h1 className="text-2xl mb-5">
          WHY <span className="font-semibold">CHOOSE US</span>
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="border px-10 md:px-16 py-8 sm:py-16 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h1 className="text-xl font-bold mb-5">EFFICIENCY:</h1>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h1 className="text-xl font-bold mb-5">CONVENIENCE:</h1>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h1 className="text-xl font-bold mb-5">PERSONALIZATION:</h1>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

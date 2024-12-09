const AboutPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default AboutPage;

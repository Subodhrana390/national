import React from "react";
import gop from "../assets/gop.svg";
import Banner from "./Banner";

const Home = () => {
  document.title = "Home | National Service Scheme";
  return (
    <div className="bg-white ">
      {/* Banner */}
      <Banner />
      {/* What we Do */}
      <div className="bg-[#ededed] py-2 md:py-20 px-10 md:px-28 text-center">
        <h1 className="my-5 md:my-10 font-serif ">
          <span className="text-2xl font-bold">WHAT WE </span>
          DO?
        </h1>
        <p className="font-serif text-justify">
          The NSS unit of Guru Nanak Dev Engineering College is a vibrant and
          active group of students who are committed to making a difference in
          the world. We have more than 300 active students each year, from all
          batches. Our activities focus on four main areas: health and hygiene,
          education, environment, and social welfare. We believe that community
          service is an essential part of education and we are committed to
          making a positive impact on the world. We welcome new members to join
          us and help us to make a difference.
        </p>
      </div>
      {/* Our reach */}
      <div className="py-20">
        <h1 className="text-center my-2 text-3xl font-bold">OUR REACH</h1>
        <p className="text-center my-5 font-bold">
          NSS Activities Statistics and Accomplishments
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 px-2 my-10">
          <div className="flex flex-col justify-center items-center">
            <img src={gop} alt="" width={50} height={50} />
            <div className="text-info flex flex-col justify-center items-center ">
              <h1>500+</h1>
              <span>Total Volunter</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={gop} alt="" width={50} height={50} />
            <div className="text-info flex flex-col justify-center items-center ">
              <h1>40+</h1>
              <span>Total no of events</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={gop} alt="" width={50} height={50} />
            <div className="text-info flex flex-col justify-center items-center ">
              <h1>600+</h1>
              <span>Followers on Instagram</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={gop} alt="" width={50} height={50} />
            <div className="text-info flex flex-col justify-center items-center ">
              <h1>10+</h1>
              <span>Media outreach</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={gop} alt="" width={50} height={50} />
            <div className="text-info flex flex-col justify-center items-center ">
              <h1>100+</h1>
              <span>Female Students</span>
            </div>
          </div>
        </div>
      </div>
      {/* OUR INSPIRING GUEST */}
      <div className="py-5 px-5 bg-[#ededed]">
        <h1 className="text-center font-bold text-2xl">OUR INSPIRING GUEST</h1>
        <p className="text-center font-bold text-xl mb-4">
          Our most inspring guest
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-2">
          <div className="p-2 ">
            <img
              src="https://techscript-roshan.github.io/NSS-Website/Resources/Profile%20img/Rupinder%20kaur%20SRA.jpg"
              alt=""
              width={250}
              height={300}
              className="border aspect-square rounded-sm my-2"
            />
            <div className="guest_info text-center">
              <h1>Rupinder Kaur SRA</h1>
              <h3>Superintendent of Police</h3>
              <h3>(Punjab), CM Medal Awardee</h3>
            </div>
          </div>
          <div className="p-2 ">
            <img
              src="https://techscript-roshan.github.io/NSS-Website/Resources/Profile%20img/Balwant%20Sing%20ASI2.jpg"
              alt=""
              width={250}
              height={300}
              className="border aspect-square rounded-sm my-2"
            />
            <div className="guest_info text-center">
              <h1>Rupinder Kaur SRA</h1>
              <h3>Superintendent of Police</h3>
              <h3>(Punjab), CM Medal Awardee</h3>
            </div>
          </div>
          <div className="p-2 ">
            <img
              src="https://techscript-roshan.github.io/NSS-Website/Resources/Profile%20img/Dr.Gurpreet%20Kaur.jpg"
              alt=""
              width={250}
              height={300}
              className="border aspect-square rounded-sm my-2"
            />
            <div className="guest_info text-center">
              <h1>Rupinder Kaur SRA</h1>
              <h3>Superintendent of Police</h3>
              <h3>(Punjab), CM Medal Awardee</h3>
            </div>
          </div>
          <div className="p-2 ">
            <img
              src="https://techscript-roshan.github.io/NSS-Website/Resources/Profile%20img/Dr._J_S_sandhu.jpg"
              alt=""
              width={250}
              height={300}
              className="border aspect-square rounded-sm my-2"
            />
            <div className="guest_info text-center">
              <h1>Rupinder Kaur SRA</h1>
              <h3>Superintendent of Police</h3>
              <h3>(Punjab), CM Medal Awardee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

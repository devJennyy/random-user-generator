import { Switch } from "@/components/ui/switch";
import { profileDetails } from "@/constants/profileData";
import axios from "axios";
import { useState } from "react";

const Hero = () => {
  const [person, setPerson] = useState({
    image: null,
    firstName: null,
    lastName: null,
  });

  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setPerson({
          image: res.data.results[0].picture.large,
          firstName: res.data.results[0].name.first,
          lastName: res.data.results[0].name.last,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full lg:h-[361px] h-[280px] bg-primary flex flex-col lg:justify-center items-center lg:gap-10 sm:gap-8 gap-5 lg:pt-0 sm:pt-19 pt-11">
        <p className="lg:text-6xl sm:text-5xl text-[30px] font-medium text-white leading-9">
          Random User <br className="sm:hidden" />
          Generator
        </p>

        <Switch />
      </div>
      <div className="absolute lg:top-[17rem] sm:top-[14rem] top-[12rem] w-full max-w-[750px] flex flex-col items-center gap-6">
        <div className="sm:w-[205px] sm:h-[205px] overflow-hidden w-[170px] h-[170px] border-5 border-white rounded-3xl">
          <img
            src={
              person.image ||
              "https://img.freepik.com/premium-photo/happy-woman39s-portrait-generative-ai_972075-2866.jpg"
            }
            className="h-full w-full object-cover"
            alt="image"
          />
        </div>
        {person.firstName ? (
          <p className="sm:text-[40px] text-3xl font-bold">
            {person.firstName + " " + person.lastName}
          </p>
        ) : (
          <p className="sm:text-[40px] text-3xl font-bold">Jane Doe</p>
        )}
        <div className="flex sm:gap-12 gap-4">
          {profileDetails?.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer flex flex-col justify-center items-center gap-2"
              >
                <div className="sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl transition-default bg-transparent group-hover:bg-primary group-active:bg-primary">
                  <IconComponent className="sm:text-[24px] text-[20px] text-primary/60 group-hover:text-white group-active:text-white transition-default" />
                </div>
                <p className="sm:text-[16px] text-sm font-medium text-primary/60 group-hover:text-primary group-active:text-primary transition-default">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => fetchUser()}
          className="text-lg px-10 py-3 border bg-primary hover:bg-black transition-default text-white rounded-lg font-medium cursor-pointer !mt-10"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Hero;

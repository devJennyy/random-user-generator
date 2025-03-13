import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

const Hero = () => {
  const [active, setActive] = useState("nameTab");
  const [person, setPerson] = useState({
    image: null,
    firstName: "Jane",
    lastName: "Doe",
    email: null,
    birthDate: null,
    city: null,
    country: null,
    contact: null,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    date.setDate(2);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setPerson({
          image: res.data.results[0].picture.large,
          firstName: res.data.results[0].name.first,
          lastName: res.data.results[0].name.last,
          email: res.data.results[0].email,
          birthDate: res.data.results[0].registered.date,
          city: res.data.results[0].location.city,
          country: res.data.results[0].location.country,
          contact: res.data.results[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full lg:h-[361px] sm:h-[320px] h-[280px] bg-primary flex flex-col lg:justify-center items-center lg:gap-10 sm:gap-8 gap-5 lg:pt-0 sm:pt-19 pt-11">
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
        {active === "nameTab" && person.firstName && (
          <p className="sm:text-[40px] text-3xl font-bold sm:h-[48px] h-[30px]">
            {person.firstName + " " + person.lastName}
          </p>
        )}

        {active === "emailTab" && person.email && (
          <p className="flex items-center sm:text-[40px] text-2xl font-bold sm:h-[48px] h-[30px]">
            {person.email}
          </p>
        )}

        {active === "birthdateTab" && person.birthDate && (
          <p className="sm:text-[40px] text-3xl font-bold sm:h-[48px] h-[30px]">
            {formatDate(person.birthDate)}
          </p>
        )}

        {active === "locationTab" && person.country && (
          <p className="sm:text-[40px] text-3xl font-bold sm:h-[48px] h-[30px]">
            {person.city + ", " + person.country}
          </p>
        )}

        {active === "contactTab" && person.contact && (
          <p className="sm:text-[40px] text-3xl font-bold sm:h-[48px] h-[30px]">
            {"+" + person.contact}
          </p>
        )}

        <div className="flex sm:gap-12 gap-4 !mt-4">
          <button
            onClick={() => setActive("nameTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "nameTab"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
            >
              <CgUserlane className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`sm:text-[16px] text-sm font-medium ${
                active === "nameTab" ? "text-primary" : "text-primary/60"
              }`}
            >
              Name
            </p>
          </button>

          <button
            onClick={() => setActive("birthdateTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "birthdateTab"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
            >
              <MdDateRange className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "birthdateTab" ? "text-primary" : "text-primary/60"
              }`}
            >
              BirthDate
            </p>
          </button>

          <button
            onClick={() => setActive("emailTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "emailTab"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
            >
              <IoChatboxEllipses className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "emailTab" ? "text-primary" : "text-primary/60"
              }`}
            >
              Email
            </p>
          </button>

          <button
            onClick={() => setActive("locationTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "locationTab"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
            >
              <TbLocationFilled className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "locationTab" ? "text-primary" : "text-primary/60"
              }`}
            >
              Location
            </p>
          </button>

          <button
            onClick={() => setActive("contactTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "contactTab"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary"
              }`}
            >
              <BiSolidPhoneCall className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "contactTab" ? "text-primary" : "text-primary/60"
              }`}
            >
              Contact
            </p>
          </button>
        </div>

        <button
          onClick={() => fetchUser()}
          className="sm:text-lg sm:px-10 px-8 py-3 sm:py-3 border bg-primary hover:bg-black active:bg-black transition-default text-white rounded-lg font-medium cursor-pointer sm:!mt-10 mt-5"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Hero;

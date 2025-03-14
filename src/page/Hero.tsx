import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import ToggleButton from "@/components/ui/ToggleButton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Hero = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState("nameTab");
  const [person, setPerson] = useState({
    image: null,
    firstName: "Jane",
    lastName: "Doe",
    email: null,
    birthDate: null,
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
    setLoading(true)
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setPerson({
          image: res.data.results[0].picture.large,
          firstName: res.data.results[0].name.first,
          lastName: res.data.results[0].name.last,
          email: res.data.results[0].email,
          birthDate: res.data.results[0].registered.date,
          country: res.data.results[0].location.country,
          contact: res.data.results[0].phone,
        });
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center"> 
      { loading && <LoadingSpinner/> }
      <div className="w-full lg:h-[371px] sm:h-[320px] h-[280px] bg-main border-b dark:border-b-white/5 dark:bg-midnightBlue flex flex-col lg:justify-center items-center lg:gap-10 sm:gap-8 gap-5 lg:pt-0 sm:pt-19 pt-11">
        <p className="lg:text-6xl sm:text-5xl text-[26px] font-medium text-white sm:leading-9 leading-8">
          Random User <br className="sm:hidden" />
          Generator
        </p>

        <ToggleButton />
      </div>
      <div className="absolute lg:top-[17rem] sm:top-[14rem] top-[12rem] w-full max-w-[750px] flex flex-col items-center gap-8">
        <div className="sm:w-[205px] sm:h-[205px] overflow-hidden w-[160px] h-[160px] border-5 border-white rounded-3xl">
          <img
            src={
              person.image ||
              ""
            }
            className="h-full w-full object-cover"
            alt="image"
          />
        </div>
        {active === "nameTab" && person.firstName && (
          <p className="sm:text-[40px] text-[28px] font-bold sm:h-[55px] h-[30px] dark:text-white">
            {person.firstName + " " + person.lastName}
          </p>
        )}

        {active === "emailTab" && person.email && (
          <p className="block sm:text-[40px] text-2xl font-bold sm:h-[55px] h-[30px] md:w-full sm:w-[550px] w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
            {person.email}
          </p>
        )}

        {active === "birthdateTab" && person.birthDate && (
          <p className="sm:text-[40px] text-[28px] font-bold sm:h-[55px] h-[30px]">
            {formatDate(person.birthDate)}
          </p>
        )}

        {active === "locationTab" && person.country && (
          <p className="sm:text-[40px] text-[28px] font-bold sm:h-[55px] h-[30px]">
            {person.country}
          </p>
        )}

        {active === "contactTab" && person.contact && (
          <p className="sm:text-[40px] text-[28px] font-bold sm:h-[55px] h-[30px]">
            {"+" + person.contact}
          </p>
        )}

        <div className="flex sm:gap-12 gap-4 !mt-2">
          <button
            onClick={() => setActive("nameTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2 group"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "nameTab"
                  ? "bg-main dark:bg-white text-white dark:text-main"
                  : "bg-transparent text-main/90 dark:text-white/90 group-hover:bg-main/10 dark:group-hover:bg-white/10"
              }`}
            >
              <CgUserlane className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "nameTab"
                  ? "text-main dark:text-white"
                  : "text-main/80 dark:text-white/70 group-hover:text-main dark:group-hover:text-white"
              }`}
            >
              Name
            </p>
          </button>

          <button
            onClick={() => setActive("birthdateTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2 group"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "birthdateTab"
                  ? "bg-main dark:bg-white text-white dark:text-main"
                  : "bg-transparent text-main/90 dark:text-white/90 group-hover:bg-main/10 dark:group-hover:bg-white/10"
              }`}
            >
              <MdDateRange className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "birthdateTab"
                  ? "text-main dark:text-white"
                  : "text-main/80 dark:text-white/70 group-hover:text-main dark:group-hover:text-white"
              }`}
            >
              BirthDate
            </p>
          </button>

          <button
            onClick={() => setActive("emailTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2 group"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "emailTab"
                  ? "bg-main dark:bg-white text-white dark:text-main"
                  : "bg-transparent text-main/90 dark:text-white/90 group-hover:bg-main/10 dark:group-hover:bg-white/10"
              }`}
            >
              <IoChatboxEllipses className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "emailTab"
                  ? "text-main dark:text-white"
                  : "text-main/80 dark:text-white/70 group-hover:text-main dark:group-hover:text-white"
              }`}
            >
              Email
            </p>
          </button>

          <button
            onClick={() => setActive("locationTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2 group"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "locationTab"
                  ? "bg-main dark:bg-white text-white dark:text-main"
                  : "bg-transparent text-main/90 dark:text-white/90 group-hover:bg-main/10 dark:group-hover:bg-white/10"
              }`}
            >
              <TbLocationFilled className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "locationTab"
                  ? "text-main dark:text-white"
                  : "text-main/80 dark:text-white/70 group-hover:text-main dark:group-hover:text-white"
              }`}
            >
              Location
            </p>
          </button>

          <button
            onClick={() => setActive("contactTab")}
            className="cursor-pointer flex flex-col justify-center items-center gap-2 group"
          >
            <div
              className={`transition-default sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl ${
                active === "contactTab"
                  ? "bg-main dark:bg-white text-white dark:text-main"
                  : "bg-transparent text-main/90 dark:text-white/90 group-hover:bg-main/10 dark:group-hover:bg-white/10"
              }`}
            >
              <BiSolidPhoneCall className="sm:text-[24px] text-[20px]" />
            </div>
            <p
              className={`transition-default sm:text-[16px] text-sm font-medium ${
                active === "contactTab"
                  ? "text-main dark:text-white"
                  : "text-main/80 dark:text-white/70 group-hover:text-main dark:group-hover:text-white"
              }`}
            >
              Contact
            </p>
          </button>
        </div>

        <button
          onClick={() => fetchUser()}
          className="sm:text-lg sm:px-10 px-8 py-3 sm:py-3 border bg-main dark:bg-white hover:bg-black dark:hover:border-white/90 dark:hover:bg-transparent dark:active:bg-transparent dark:border active:bg-black dark:active:border-white/90 transition-default text-white dark:text-main dark:hover:text-white dark:active:text-white rounded-lg font-medium cursor-pointer sm:!mt-10 mt-5"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Hero;

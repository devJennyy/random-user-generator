import { Switch } from "@/components/ui/switch";
import { profileDetails } from "@/constants/profileData";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full lg:h-[361px] h-[280px] bg-primary flex flex-col lg:justify-center items-center sm:gap-8 gap-5 lg:pt-0 sm:pt-19 pt-11">
        <p className="lg:text-6xl sm:text-5xl text-[30px] font-medium text-white leading-9">
          Random User <br className="sm:hidden" />
          Generator
        </p>

        <Switch />
      </div>
      <div className="absolute lg:top-[17rem] sm:top-[14rem] top-[12rem] w-full max-w-[750px] flex flex-col items-center gap-6">
        <div className="sm:w-[205px] sm:h-[205px] w-[170px] h-[170px] bg-slate-400 border-5 border-white rounded-3xl"></div>
        <p className="sm:text-[40px] text-3xl font-bold">Jane Smith Doe</p>
        <div className="flex sm:gap-12 gap-4">
          {profileDetails?.map((item) => {
            const IconComponent = item.icon;
            return (
              <div className="group cursor-pointer flex flex-col justify-center items-center gap-2">
                <div className="sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] flex justify-center items-center sm:rounded-3xl rounded-2xl transition-default bg-transparent group-hover:bg-primary">
                  <IconComponent className="sm:text-[24px] text-[20px] text-primary/60 group-hover:text-white transition-default" />
                </div>
                <p className="sm:text-[16px] text-sm font-medium text-primary/60 group-hover:text-primary transition-default">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 !mt-10">
          <button className="px-6 py-2 border rounded-lg font-bold cursor-pointer">
            Prev
          </button>
          <button className="px-6 py-2 border bg-primary text-white rounded-lg font-bold cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

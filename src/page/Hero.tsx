import { Switch } from "@/components/ui/switch";
import { profileDetails } from "@/constants/profileData";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full h-[361px] bg-primary flex flex-col justify-center items-center gap-8">
        <p className="text-6xl font-medium text-white">Random User Generator</p>

        <Switch />
      </div>
      <div className="absolute top-[17rem] w-full max-w-[750px] flex flex-col items-center gap-6">
        <div className="w-[205px] h-[205px] bg-slate-400 border-5 border-white rounded-3xl"></div>
        <p className="text-[40px] font-bold">Jane Smith Doe</p>
        <div className="flex gap-12">
          {profileDetails?.map((item) => {
            const IconComponent = item.icon;
            return (
              <div className="group cursor-pointer flex flex-col justify-center items-center gap-2">
                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-3xl transition-default bg-transparent group-hover:bg-primary">
                  <IconComponent
                    size={24}
                    className="text-primary/60 group-hover:text-white transition-default"
                  />
                </div>
                <p className="font-medium text-primary/60 group-hover:text-primary transition-default">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 !mt-20">
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

import PulseLoader from "react-spinners/PulseLoader";

const LoadingSpinner = () => {
  return (
    <div className="fixed flex justify-center items-center top-0 z-10 w-screen h-screen bg-black/60 backdrop-blur-md">
      <PulseLoader className="z-20 " color="white" size={20}/>
    </div>
  );
};

export default LoadingSpinner;

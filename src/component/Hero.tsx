
import bannerimg from "../assets/bannerbg.png";
import bannermain from "../assets/banner-main.png";

const Hero = () => {
    return (
        <div
            className="  container mx-auto  h-100  flex flex-col   items-center  justify-center  rounded-2xl   bg-cover bg-center   bg-no-repeat mt-6 "
            style={{
                backgroundImage: `url(${bannerimg})`,
            }}
        >
            <img
                src={bannermain}
                alt="Cricket"
                className="w-45"
            />

            <h1 className="mt-4 text-4xl font-bold text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mt-3 text-lg text-white/70">
                Beyond Boundaries Beyond Limits
            </p>

            <button
                className=" mt-5 rounded-lg  bg-[#DBF128]  px-5 py-3 font-bold ring-1  ring-[#E7FE29]   ring-offset-4    ring-offset-[#111]   "










            >
                Claim Free Credit
            </button>
        </div>
    );
};

export default Hero;
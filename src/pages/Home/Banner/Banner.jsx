import bannerBG from "../../../assets/images/bg-visor-header.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${bannerBG}")`,
      }}
      className="w-full h-screen md:h-[70vh] text-center flex flex-col justify-center gap-6"
    >
      <h4 className="text-xl md:text-2xl font-medium text-gray-500">
        Task Management
      </h4>
      <h1 className="text-5xl md:text-6xl font-bold">
        The flexible, collaborative workspace
      </h1>
      <p className="font-medium text-lg px-2">
        The simplicity of a spreadsheet — but far more adaptable. Save time and
        keep stakeholders <br /> in the loop by connecting apps like Jira to
        Visor.
      </p>
      <button className="px-4 py-2 bg-emerald-500 w-fit mx-auto text-white text-lg font-medium hover:bg-emerald-700 hover:rounded-l-xl transition-all duration-700">
        Let&apos;s Explore
      </button>
      <p className="font-medium text-gray-500">No credit card needed.</p>
    </div>
  );
};

export default Banner;

import pms from "../../../assets/images/pms.webp";
import rms from "../../../assets/images/rms.webp";
import wms from "../../../assets/images/wms.webp";
import cms from "../../../assets/images/cms.webp";
import dis from "../../../assets/images/dis.webp";
const Beneficial = () => {
  return (
    <div className="max-w-7xl mx-auto text-center my-40">
      <h1 className="text-3xl md:text-5xl font-bold">Find Your Problems</h1>
      <p className="max-w-4xl mx-auto mt-5 mb-20">
        Quickbase is the leading application platform for dynamic work. We make
        the complex simple by helping companies see, connect, and control their
        projects, from day one to done.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
        {/* Project management solutions */}
        <div className="w-fit flex flex-col justify-center items-center gap-3">
          <img
            className="w-40"
            src={pms}
            alt="Project management solutions icon"
          />
          <h5 className="text-2xl md:text-3xl font-semibold">
            Run your most complex projects
          </h5>
          <p className="text-xl font-semibold px-5 border-b-4 border-emerald-500 cursor-pointer hover:border-emerald-300 transition-colors duration-500">
            Project management solutions
          </p>
        </div>
        {/* Resource management solutions */}
        <div className="w-fit flex flex-col justify-center items-center gap-3">
          <img
            className="w-40"
            src={rms}
            alt="Project management solutions icon"
          />
          <h5 className="text-2xl md:text-3xl font-semibold">
            Manage, track, and allocate resources
          </h5>
          <p className="text-xl font-semibold px-5 border-b-4 border-emerald-500 cursor-pointer hover:border-emerald-300 transition-colors duration-500">
            Resource management solutions
          </p>
        </div>
        {/* Workflow management solutions */}
        <div className="w-fit flex flex-col justify-center items-center gap-3">
          <img
            className="w-40"
            src={wms}
            alt="Project management solutions icon"
          />
          <h5 className="text-2xl md:text-3xl font-semibold">
            Orchestrate critical business processes and workflows
          </h5>
          <p className="text-xl font-semibold px-5 border-b-4 border-emerald-500 cursor-pointer hover:border-emerald-300 transition-colors duration-500">
            Workflow management solutions
          </p>
        </div>
        {/* Compliance management solutions */}
        <div className="w-fit xl:col-span-2 flex flex-col justify-center items-center gap-3">
          <img
            className="w-40"
            src={cms}
            alt="Project management solutions icon"
          />
          <h5 className="text-2xl md:text-3xl font-semibold">
            Administer compliance policies <br /> and procedures
          </h5>
          <p className="text-xl font-semibold px-5 border-b-4 border-emerald-500 cursor-pointer hover:border-emerald-300 transition-colors duration-500">
            Compliance management solutions
          </p>
        </div>
        {/*  Delivery & installation solutions */}
        <div className="w-fit flex flex-col justify-center items-center gap-3">
          <img
            className="w-40"
            src={dis}
            alt="Project management solutions icon"
          />
          <h5 className="text-2xl md:text-3xl font-semibold">
            Deliver and install products <br /> and services
          </h5>
          <p className="text-xl font-semibold px-5 border-b-4 border-emerald-500 cursor-pointer hover:border-emerald-300 transition-colors duration-500">
            Delivery & installation solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficial;

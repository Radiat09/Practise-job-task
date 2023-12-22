import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center py-4">
        <div className="flex justify-end text-4xl font-extrabold">
          <Link to="/">
            My<span className="text-emerald-500">Tasks</span>
          </Link>
        </div>
        <div className="flex justify-start gap-5 text-xl  font-bold">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:text-emerald-700 transition-colors duration-500"
            href="www.linkedin.com/in/radiat-hossain-ridoy0"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:text-emerald-700 transition-colors duration-500"
            href="https://github.com/Radiat09"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:text-emerald-700 transition-colors duration-500"
            href="https://ridoy-frontend-developer.netlify.app/"
          >
            Portfolio
          </a>
        </div>
      </div>
      <div className="py-2 text-center">
        <p>© 2023 by RocketVisor Corporation - All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

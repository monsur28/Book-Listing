import { Link } from "react-router-dom";
import banner from "./BannerBook.png";

const Banner = () => {
  return (
    <div className="lg:hero bg-base-200 mt-16 rounded-3xl">
      <div className=" flex lg:flex-row-reverse flex-col justify-center items-center gap-24 py-20">
        <img src={banner} className="lg:max-w-sm rounded-lg bg-base-200" />
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold text-left">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link
            to="/listedBooks"
            className="btn w-40 text-white flex justify-center items-center mt-12 bg-[#23BE0A] border-none work px-7"
          >
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

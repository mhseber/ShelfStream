import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import banner from "../../../public/assets/hero_img.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto mt-6 px-4 lg:px-0">
      <div className="hero bg-base-200 rounded-3xl p-10 lg:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-24">
          {/* Right Side: Image with shadow and border */}
          <div className="flex-1 flex justify-center">
            <img
              src={banner}
              className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl border-4 border-white transform hover:scale-105 transition duration-300"
              alt="Featured Book"
            />
          </div>

          {/* Left Side: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#131313] leading-tight">
              Books to freshen up <br />
              <span className="text-[#23BE0A]">your bookshelf</span>
            </h1>

            <p className="py-8 text-lg text-gray-600 font-medium">
              Discover a world of stories, knowledge, and inspiration. Start
              building your digital library today with ShelfStream.
            </p>

            <Link to="/readList">
              <button className="btn bg-[#23BE0A] hover:bg-[#1fa508] text-white px-8 border-none text-lg group">
                View The List
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Optional Small Badge */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-gray-500">
              <FaBookOpen className="text-[#23BE0A]" />
              <span>Over 500+ books available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

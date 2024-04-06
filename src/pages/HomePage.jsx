import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const HomePage = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex justify-between py-2 md:mx-16 md:px-4">
        <h1 className="text-red-500 font-bold md:text-2xl">BookUsNow</h1>
        <div className="hidden md:flex md:gap-x-1 md:w-[55%]">
          <button className="bg-black text-white flex items-center gap-x-3 px-3 py-2 rounded-md">
            {/* ICON */}
            <GiHamburgerMenu />
            Categories
          </button>
          <div className="flex gap-x-2 justify-between items-center w-full px-2 border-2 border-black rounded-md">
            <input type="text" className="w-full h-full outline-none border-none" />
            {/* SEARCH ICON */}
            <IoMdSearch />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          {/* Favourite ICON */}
          <div className="flex items-center gap-x-1">
            <MdOutlineFavorite />
            Favourites
          </div>
          <button className="px-2 py-1 border border-black rounded-md">
            Sign In
          </button>
        </div>
      </nav>

      <section className="grid md:grid-cols-4 md:mx-16 py-2">
        <div className="hidden md:flex items-center rounded-md py-1 px-2 gap-x-2">
          {/* LOCATION ICON */}
          <FaLocationDot />
          Mumbai, India
          <IoIosArrowForward />
          {/* ARROW ICON */}
        </div>
        <ul className="flex py-1 flex-nowrap px-4 justify-around gap-x-4 overflow-y-auto md:gap-x-4 col-span-2">
          <li>Live Shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Pays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </section>

      {/* HERO-SECTION */}
      <section>
        <img className="absolute w-full object-contain" src="/BannerImage.svg" alt="BANNER IMAGE" />
        <div className="relative text-white top-44 px-10 text-center space-y-6 md:w-[85%] mx-auto">
          <h1 className="md:text-[4.5rem] md:leading-[110px]">
            Discover Exciting Events Happening <br className="hidden md:block" /> Near You - Stay Tuned for
            Updates!
          </h1>
          <p className="px-24 mx-auto text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae
            aut deleniti magni, voluptates facilis aliquam soluta animi vero a
            architecto assumenda nostrum optio excepturi impedit odit?
            Repudiandae, necessitatibus!{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

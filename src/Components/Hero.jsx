import Reac, { useEffect } from "react";
import { CalendarRange, Clock, MapPin, Search } from "lucide-react";

// Scroll Reveal
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hero-reveal", {
      distance: "50px",
      easing: "ease-in-out",
      duration: 1000,
      origin: "left",
      reset: false,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".head-reveal", {
      scale: 0.85,
      distance: "0px",
      easing: "ease-in-out",
      duration: 1500,
      reset: false,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-y", {
      scale: 0.85,
      distance: "100px",
      easing: "ease-in-out",
      duration: 1000,
      origin: "bottom",
      interval: 200,
      reset: false,
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 hero-reveal">
        Find Your Perfect <span className="text-yellow-400">Rental Car</span>
      </h1>
      <p className="text-lg sm:text-xl mb-12 text-gray-200 hero-reveal">
        Discover amazing deals in quality vehicles. Book now and drive away with
        confidence.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black hero-reveal">
        {/* Pickup Location */}
        <div className="">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-5 h-5" />
            <span>Pickup Location</span>
          </label>
          <select className="w-full p-2 border border-gray-300 rounded cursor-pointer">
            <option disabled>Select City</option>
            <option>New York</option>
            <option>Phonix</option>
            <option>Austin</option>
          </select>
        </div>

        {/* Pickup Date */}
        <div className="">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <CalendarRange className="w-5 h-5" />
            <span>Pickup Data</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Pickup Time */}
        <div className="">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Clock className="w-5 h-5" />
            <span>Pickup Time</span>
          </label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Return Date */}
        <div className="">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <CalendarRange className="w-5 h-5" />
            <span>Return Data</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Button */}
        <div>
          <button className="flex items-center justify-center gap-2 w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
            <Search className="w-5 h-5" />
            <span>Search Cars</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-white">
        <div className="">
          <h2 className="sm:text-4xl text-3xl font-bold">500+</h2>
          <p className="sm:text-lg text-gray-200">Premium Cars</p>
        </div>
        <div className="">
          <h2 className="sm:text-4xl text-3xl font-bold">50+</h2>
          <p className="sm:text-lg text-gray-200">Location</p>
        </div>
        <div className="">
          <h2 className="sm:text-4xl text-3xl font-bold">24/7</h2>
          <p className="sm:text-lg text-gray-200">Support</p>
        </div>
        <div className="">
          <h2 className="sm:text-4xl text-3xl font-bold">99%</h2>
          <p className="sm:text-lg text-gray-200">Staisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

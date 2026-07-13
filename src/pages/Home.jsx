import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook ,FaLocationDot} from "react-icons/fa6";
import { FaInstagramSquare,FaPhoneAlt } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const res = await axios.get("https://dummyjson.com/recipes?limit=3");
    console.log(res.data.recipes);
    setRecipes(res.data.recipes);
  };
  useEffect(() => {
    getRecipes();
  }, []);

  const iconClass = " w-7 h-7 text-[#FFFFFF] hover:text-orange-500 transition-colors cursor-pointer";
  return (
    <div>
      <section>
        <div className="grid grid-cols-2">
          <div className="px-50 py-35">
            <span className="text-gray-500">RESTAURANT</span>
            <div className="flex items-center gap-2 text-3xl font-bold ">
              The
              <div className="relative">
                <img
                  src="one.png"
                  alt=""
                  className="relative h-[76.11px] w-[190.5px]"
                />
                <span className="left-2 -top-1 absolute font-bold text-white text-[61px]">
                  #One
                </span>
              </div>
            </div>
            <div className="text-4xl font-bold ">
              Momo{" "}
              <span className="text-orange-600 text-4.5xl font-bold">
                {" "}
                Restaurant
              </span>
            </div>
            <div className="py-3">
              More than <span className="text-orange-600"> 20+ Varieties</span>{" "}
              of momo available for you
            </div>
            <div className="rounded-3xl text-white bg-amber-950 w-45 text-center h-10 items-center py-2 ">
              Explore Food Menu
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src="orange.png"
                className="h-150  absolute right-0
             "
                alt=""
              />
              <img
                src="momos.png"
                className=" absolute z-20 h-108.5 w-155.5 left-30 top-20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 py-3">
          <div className=" py-50">
            <div className="relative left-40 h-100 ">
              <img src="back.png" className="h-[450px] w-[450px]" alt="" />
              <img
                className="h-130  px-50 absolute bottom-10 right-45 -top-18 "
                src="man.png"
                alt=""
              />
            </div>
          </div>
          <div className="py-65">
            <h2 className="font-bold text-3xl">
              Why Customers <span className="text-orange-600">Love Us</span>
            </h2>
            <p className="text-left py-4 -px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              placeat animi quam sed tempora minus, corporis necessitatibus
              repudiandae natus et facilis esse pariatur illum omnis porro
              officia dignissimos corrupti laboriosam.
            </p>
            <div className="rounded-3xl bg-amber-700 text-white w-40 h-10 text-center py-1">
              Explore Our Story
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className=" flex text-center justify-center text-4xl  font-bold  gap-3  py-2">
            Our <span className="text-orange-600">Most Popular</span>Recipes
          </div>
          <h2 className="text-center text-gray-600 text-2xl py-3">
            Browse through a varieties of recipes with fresh ingrediants
            selected only from the best places
          </h2>
        </div>
        <div className=" flex gap-20 justify-center py-5 rounded-3xl">
          <button className="rounded-full  py-3 px-12 border border-gray-300">
            Buff
          </button>
          <button className="rounded-full py-3 px-12 border border-gray-300">
            Chicken
          </button>
          <button className="rounded-full  py-3 px-12 border border-gray-300">
            Veg
          </button>
        </div>
          
        <div className="flex justify-center py-16 gap-12">
          
            {recipes.map((recipe) => (
              <div key={recipe.id} className="flex flex-col items-center gap-2">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-64 w-74 object-cover rounded-2xl"
                />
                <h2 className="font-semibold text-xl">{recipe.name}</h2>
                <p className="font-semibold">
                  {" "}
                  रु
                  <span className="text-orange-600">
                    {recipe.caloriesPerServing}
                  </span>
                </p>
              </div>
            ))}
          
        </div>
        <div className=" flex justify-center">
          <button className=" text-white bg-green-950 rounded-4xl h-15 w-50  ">
            {" "}
            Explore Our Menu
          </button>
        </div>
      </section>

      <section>
        <div className="text-center font-bold text-4xl py-10">
          <span className="text-orange-600">We Offer People</span> The Service
          They Want
        </div>
        <img src="chef.png" className=" relative h-[640px] w-full" alt="" />
        <div className="relative bottom-105 text-center right-6  text-white">
          <h1 className="font-bold text-5xl">Process behind the making</h1>
          <p className="text-2xl py-3 ">
            See how only chefs cooks only the best momo
          </p>
          <button className="text-white bg-green-950 rounded-4xl w-60 h-15">
            Watch the video
          </button>
        </div>
        <div className="flex items-center justify-center -py-50 gap-10 ">
          <div className="flex flex-col items-center">
            <img src="like.png" className="h-20 w-20" alt="" />
            <h1 className="font-bold text-2xl">Quality Food</h1>
            <p>Only the best food with top quality products and ingredients </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="party.png" className="w-20 h-20" alt="" />
            <h1 className="font-bold text-2xl text-center">Private Party</h1>
            <p>
              {" "}
              Get the best food for all your private parties and gatherings
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="catering.png" className="w-20 h-20" alt="" />
            <h1 className="font-bold text-2xl text-center">Catering</h1>
            <p>Get the best food for any occasions and gatherings</p>
          </div>
        </div>
        <div className=" flex justify-center p-10 ">
          <button className="bg-green-950 text-white rounded-full p-3">
            Explore Our Services
          </button>
        </div>
      </section>

      <section className="py-15 px-30">
        <div className="grid grid-cols-2 justify-center items-center gap-20">
          <div>
            <div className="text-3xl font-bold">
              200+ <span className="text-orange-600">Happy Customers</span>
            </div>
            <h1 className=" font-bold text-xl text-green-600">
              What our customers say about us
            </h1>
            <p className="py-8 italic">
              "Only the best momo you can find in the market.
              <br />
              Different Varieties of momo to choose from.Will
              <br />
              be visiting again soon"
            </p>

            <div className="font-bold text-2xl">Livia Dias</div>
            <div className="flex gap-2 ">
              <FaCircleArrowLeft />
              <FaArrowCircleRight />
            </div>
          </div>
          <div>
            <img src="women.png" className=" h-[450px] w-[350px] " alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-10 lg:px-20 max-w-6xl mx-auto">
  <div className="flex flex-col justify-center items-center gap-10">
    <div className="text-center">
      <h1 className="font-bold text-3xl sm:text-[39px] text-[#101828]">Get <span className="text-[#D95103]">In Touch</span></h1>
      <p className="font-bold text-lg sm:text-[25px] text-[#0C6967] mt-2">Our Friendly team would love to hear from you</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 w-full bg-white text-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      
      <div className="lg:col-span-5 flex flex-col rounded-2xl p-6 sm:p-8 items-start bg-[#0C6967] m-4">
        <h5 className="font-semibold flex items-center gap-2 text-lg"><FaLocationDot />
          <span>Our Address</span>
        </h5>
        <p className="italic mt-2 text-sm sm:text-base opacity-90">New Baneshwor, Kathmandu, Bagmati, Nepal</p>

        <h5 className="font-semibold flex items-center gap-2 mt-8 text-lg"><FaPhoneAlt />
          <span>Our Contacts</span>
        </h5>
        <div className="flex flex-wrap gap-8 mt-2 w-full text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">Mobile</span>
            <p className="italic">980 5689789</p>
            <p className="italic">980 5689789</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">Landline</span>
            <p className="italic">01-4783972</p>
          </div>
        </div>

        <h5 className="font-semibold flex items-center gap-2 mt-8 text-lg"><MdWatchLater />
          <span>Our Service Time</span>
        </h5>
        <div className="flex flex-wrap gap-8 mt-2 w-full text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">MON - FRI</span>
            <p className="italic">10 am - 8 pm</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold opacity-75">SAT - SUN</span>
            <p className="italic">Closed</p>
          </div>
        </div>

        <div className="mt-12 w-full">
          <p className="italic text-base opacity-90">Get in touch in social networks</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className={iconClass} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><AiFillTikTok className={iconClass} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagramSquare className={iconClass} /></a>
          </div>
        </div>
      </div>

      <form className="lg:col-span-7 flex flex-col items-start bg-white p-6 sm:p-10 text-black w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black w-full mb-4">
          <div className="flex flex-col">
            <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First Name</label>
            <input
              className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
              type="text" id="first-name" name='FirstName' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
              type="text" id="last-name" name='LastName' />
          </div>
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
            type="email" id="email" name='Email' />
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="service" className="text-sm font-medium text-gray-700">What can we do for you</label>
          <div className="relative w-full mt-1">
            <select
              id="service"
              name="Service"
              defaultValue=""
              className="w-full border border-[#DFE2E6] rounded-lg p-3 pr-12 appearance-none bg-white cursor-pointer outline-none text-gray-400 focus:border-[#0C6967] focus:text-black"
              required
            >
              <option value="" disabled hidden>Choose option</option>
              <option value="support">Customer Support</option>
              <option value="sales">Sales & Inquiries</option>
              <option value="feedback">Feedback</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-4">
          <label htmlFor="phn-number" className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            className="w-full border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967]"
            type="number" id="phn-number" name='PhoneNumber' />
        </div>

        <div className="flex flex-col w-full mb-6">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full h-28 border border-[#DFE2E6] rounded-lg p-3 mt-1 outline-none focus:border-[#0C6967] resize-none"
            name="Message" id="message"></textarea>
        </div>

        <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#D95103] hover:bg-[#b84302] transition-colors font-medium text-white text-center">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
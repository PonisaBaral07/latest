import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


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

      <section>
        <div className="text-center py-30">
          <div className="text-3xl font-bold">
            Get <span className="text-orange-600">In Touch</span>
          </div>
          <div classname=" flex py-2 gap-1.5">
            Our Friendly team would love to hear from you
          </div>
        </div>
        <div className="p-5  h-270 w-[1100px] flex  items-center  shadow-2xl rounded-4xl">
          <div className=" h-250 w-[400px] bg-green-600 p-10 rounded-3xl">
            <div className="text-white">
              <h1 className="text-2xl ">Our Address</h1>
              <p className="italic py-4">
                New Baneshwor,Kathmandu,Bagmati,Nepal
              </p>
            </div>
            <div className="text-white py-20">
              <div className="text-2xl">Our Contacts</div>
              <div className=" flex py-5">
                <div>
                  <h1>Mobile</h1>
                  <h2>9811085467</h2>
                  <h2>9863438856</h2>
                </div>
                <div className="px-15">
                  <h1>Landline</h1>
                  <h2>01-4783972</h2>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="text-2xl">Our Service Time</div>
              <div className="flex py-5 ">
                <div>
                  <h1>MON-FRI</h1>
                  <h2>10 am- 8 pm</h2>
                </div>
                <div className="px-15">
                  <h1>SAT-SUN</h1>
                  <h2>Closed</h2>
                </div>
              </div>
            </div>
            <div className="text-white py-40">
              <h1 className="italic text-2xl">
                Get in touch in social networks
              </h1>
              <div className="flex gap-5 py-5">
                <FaFacebook />
                <AiFillInstagram />
                <FaTiktok />
              </div>
            </div>
          </div>

          <div className="h-250 w-[300px]  border-dotted  ">
            <div>
              <form>
                <label for="First Name">First Name</label>
                <input type="text" id="firstname" name="firstname" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
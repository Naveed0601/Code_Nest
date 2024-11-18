import React from "react";
import ceo1 from "../../assets/CEO1.png";
import ceo2 from "../../assets/CEO2.png";
import ceo3 from "../../assets/CEO3.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="w-full h-full mt-28 overflow-x-hidden px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row w-full">
        {/* Left Side (Text and button) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-4 sm:p-6">
          <h1 className="text-blue-600 text-lg sm:text-xl font-noto">
            SOFTWARE DEVELOPERS, CONTENT CREATORS LOVE CODENEST
          </h1>
          <h1 className="text-2xl sm:text-3xl text-gray-600 font-noto mt-4">
            Testimonials
          </h1>
          <p className="text-gray-100 font-glyphic font-bold mt-4 text-sm sm:text-base">
            Don't just take our word for it, read from our extensive list of
            case studies...
          </p>
          <Link to={"/login"}>
            <button className="mt-8 p-2 w-[170px] h-12 rounded-md text-base text-white hover:text-blue-600 font-normal tracking-wide font-noto bg-blue-600 hover:bg-blue-200">
              View Case Studies
            </button>
          </Link>
        </div>

        {/* Right Side (Testimonials) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-4 sm:p-6 space-y-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              title={testimonial.CeoTitle}
              description={testimonial.description}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsCard = ({ title, description, image }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
    <p className="text-gray-600 flex text-justify font-noto text-sm sm:text-base">
      <BiSolidQuoteAltLeft className="text-3xl sm:text-4xl text-blue-600 mr-4" />
      "{description}"
      <img
        src={image}
        alt="ceo"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ml-4"
      />
    </p>
    <h2 className="text-lg sm:text-xl font-extrabold text-gray-800 pl-8 sm:pl-12 font-noto mt-4">
      {title}
    </h2>
  </div>
);

const testimonialsData = [
  {
    CeoTitle: "Jane Cooper - CEO SomeCompany",
    description:
      "As a software developer, I have been using CodeNest for the past year and it has completely transformed my workflow. The tagging feature allows me to easily organize and access my code snippets, saving me valuable time and increasing productivity. The syntax highlighting is also a game changer, making it easier to read and edit code. The best part about CodeNest is the easy collaboration with team members, allowing us to share our knowledge and improve as developers together. Thank you for creating such an amazing tool.",
    image: ceo1,
  },
  {
    CeoTitle: "John Doe - CEO SomeCompany",
    description:
      "I have been a software developer for over 10 years now and I can confidently say that CodeNest has revolutionized the way I manage my code snippets. It is incredibly user-friendly, with features like tagging and syntax highlighting that make organizing and finding specific snippets a breeze. The easy collaboration aspect also allows me to share my code with team members seamlessly. Thank you CodeNest for making my coding life so much easier!",
    image: ceo2,
  },
  {
    CeoTitle: "John Smith - CEO SomeCompany",
    description:
      "As a software developer, I am constantly looking for ways to streamline my coding process and make it more efficient. CodeNest has been an absolute game changer for me. Not only does it help me organize and store all of my code snippets in one place, but the tagging feature allows me to quickly find what I need without wasting time searching through folders. The syntax highlighting also makes it easy on the eyes when working long hours. And the best part? Being able to collaborate with my team seamlessly.",
    image: ceo3,
  },
];

export default Testimonials;

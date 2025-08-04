import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

const NewsLatter = () => {
  return (
    <div className="bg-black text-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section: Email Subscription */}
        <div className="mb-8 md:mb-0 w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-2">
            Get our emails for info on new items, sales and more.
          </h2>
          <p className="text-gray-400 mb-6">
            We'll email you a voucher worth £10 off your first order over £50.
          </p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-black p-4 flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all mb-4 sm:mb-0 sm:mr-4"
            />
            <button className="bg-white text-black font-semibold p-4 hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            By subscribing you agree to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>{" "}
            &{" "}
            <a href="#" className="underline">
              Privacy & Cookies Policy.
            </a>
          </p>
        </div>

        {/* Right Section: Help and App Links */}
        <div className="w-full md:w-1/2 md:pl-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Need help?</h3>
            <div className="flex items-center">
              <AiOutlinePhone className="h-6 w-6 text-white mr-2" />
              <p className="text-3xl font-bold">(+880) 1725133045</p>
            </div>
            <p className="text-gray-400 mt-2">
              We are available 8:00am – 7:00pm
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <a href="#" className="flex-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="w-full h-auto"
              />
            </a>
            <a href="#" className="flex-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png?20220907104002"
                alt="Get it on Google Play"
                className="w-full h-auto"
              />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Shopping App: Try our View in Your Room feature, manage registries
            and save payment info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;

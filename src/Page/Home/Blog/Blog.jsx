import React from "react";
import { Link } from "react-router";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center ">
        <h1 className="text-3xl font-bold"> Our Latest News </h1>
        <p className="text-gray-400 px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {/* card 1 */}
        <div>
          <img
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/blog-4-700x517.jpg"
            alt=""
          />
          <div className="pt-2">
            <p>Collection - 25 Apr 2022</p>
            <Link className="font-bold text-xl hover:text-red-500">
              The Best Products That Shape Fashion
            </Link>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/blog-4-700x517.jpg"
            alt=""
          />
          <div className="pt-2">
            <p>Collection - 25 Apr 2022</p>
            <Link className="font-bold text-xl  hover:text-red-500">
              The Best Products That Shape Fashion
            </Link>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/blog-4-700x517.jpg"
            alt=""
          />
          <div className="pt-2">
            <p>Collection - 25 Apr 2022</p>
            <Link className="font-bold text-xl  hover:text-red-500">
              The Best Products That Shape Fashion
            </Link>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

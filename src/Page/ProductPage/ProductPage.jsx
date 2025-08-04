import React, { useState } from "react";
import { FaStar, FaPlus, FaMinus, FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

// Hardcoded product data
const product = {
  id: "123",
  name: "Basic Colored Sweatpants With Elastic Hems",
  reviews: 4,
  price: 19.9,
  oldPrice: 25.9,
  description:
    "Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.",
  additionalInfo:
    "This is some additional information about the product. It could include details like material, care instructions, and dimensions. For example, it is made of 100% cotton and should be washed in cold water.",
  reviewsContent:
    "Here are some reviews from our customers: 1. John Doe: Great product! Very comfortable and true to size. 2. Jane Smith: I love these sweatpants, they are so soft!",
  images: [
    "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1.jpeg",
    "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2.jpeg",
    "https://placehold.co/200x250/000000/FFFFFF?text=Thumb+3",
    "https://placehold.co/200x250/000000/FFFFFF?text=Thumb+4",
  ],
  colors: [
    { name: "black", hex: "#000000" },
    { name: "burgundy", hex: "#800020" },
    { name: "blue", hex: "#0000FF" },
    { name: "green", hex: "#008000" },
    { name: "teal", hex: "#008080" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "red", hex: "#FF0000" },
  ],
  sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
  sku: "BE45VGRT",
  categories: "PANTS, WOMEN",
  tags: "black, white",
  stockStatus: "In Stock",
};

const ProductPage = () => {
  // We no longer need useEffect or useParams because the data is hardcoded.
  // We'll directly initialize the state from the hardcoded 'product' object.
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <p>{product.description}</p>;
      case "additional":
        return <p>{product.additionalInfo}</p>;
      case "reviews":
        return <p>{product.reviewsContent}</p>;
      default:
        return <p>{product.description}</p>;
    }
  };

  const getTabClass = (tabName) => {
    return `py-4 border-b-2 text-sm font-semibold transition-colors duration-300 ${
      activeTab === tabName
        ? "border-black text-black"
        : "border-transparent text-gray-500 hover:text-black"
    }`;
  };

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md cursor-pointer">
              <MdClose className="text-xl text-gray-600" />
            </div>
          </div>
          <div className="flex space-x-2 mt-4 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`w-20 h-20 md:w-24 md:h-24 object-cover border-2 cursor-pointer rounded-md ${
                  mainImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.reviews ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span>{product.reviews} reviews</span>
            </div>
          </div>

          <div className="flex items-baseline space-x-2 font-semibold">
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-lg">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-black text-2xl md:text-3xl">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 text-sm md:text-base">
            {product.description}
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold">
              Color:{" "}
              <span className="font-normal capitalize">{selectedColor}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                    selectedColor === color.name
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">
              Size: <span className="font-normal">{selectedSize}</span>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 border rounded-md text-sm font-medium ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="text-gray-500 mt-2 text-sm font-semibold hover:text-black">
              &times; Clear
            </button>
          </div>

          <div className="text-sm font-semibold text-green-600">
            {product.stockStatus}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-l-md"
              >
                <FaMinus />
              </button>
              <span className="w-12 text-center text-lg font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-r-md"
              >
                <FaPlus />
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Add to cart
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
            <button className="flex items-center space-x-1 hover:text-black">
              <span className="border-b border-dashed border-gray-400">
                Size Guide
              </span>
            </button>
            <button className="flex items-center space-x-1 hover:text-black">
              <FaHeart className="text-red-500" />
              <span>Add to wishlist</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-black">
              <span>Share This Product</span>
            </button>
          </div>

          <div className="text-sm text-gray-500 mt-6 space-y-1">
            <p>SKU: {product.sku}</p>
            <p>Categories: {product.categories}</p>
            <p>Tags: {product.tags}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200">
        <div className="flex space-x-8 -mt-px">
          <button
            onClick={() => setActiveTab("description")}
            className={getTabClass("description")}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additional")}
            className={getTabClass("additional")}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={getTabClass("reviews")}
          >
            Reviews ({product.reviews})
          </button>
        </div>
        <div className="p-4 text-gray-600 text-sm leading-relaxed">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

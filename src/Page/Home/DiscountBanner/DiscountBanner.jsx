import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("FREE15FIRST");
    toast.success("Discount code copied!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <div className="bg-[#fdf4f1] text-red-600 py-6 px-4 rounded text-center m-10 max-w-7xl mx-auto ">
      <span className="font-semibold">
        Super discount for your first purchase.
      </span>{" "}
      <button
        onClick={handleCopy}
        className="border border-dashed border-red-600 px-2 py-0.5 mx-1 font-medium hover:bg-red-100 transition"
      >
        FREE15FIRST
      </button>
      <span>Use discount code in checkout!</span>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default App;

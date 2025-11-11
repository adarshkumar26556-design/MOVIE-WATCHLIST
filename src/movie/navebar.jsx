// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu } from "lucide-react"; // menu icon

// function Navbar({ toggleSidebar }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-black text-white h-20 flex items-center px-6 shadow-md fixed w-full z-50">
//       {/* Mobile menu button */}
//       <button
//         className="md:hidden text-white mr-4 hover:text-orange-500 transition"
//         onClick={toggleSidebar}
//       >
//         <Menu size={26} />
//       </button>

//       {/* Center Logo */}
//       <h1 className="text-3xl font-bold text-white mx-auto">
//         <span className="text-orange-500 text-4xl">S</span>creen
//         <span className="text-orange-500 text-4xl">V</span>ault
//       </h1>

//       {/* Right-side buttons */}
//       <div className="ml-auto hidden md:flex gap-3">
//         <button
//           className="hover:text-orange-500 text-white px-4 py-1 rounded shadow transition"
//           onClick={() => navigate("/addmovie")}
//         >
//           Add Movie
//         </button>
//         <button
//           className="hover:text-orange-500 text-white px-4 py-1 rounded shadow transition"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white h-20 flex items-center justify-between px-6 shadow-md fixed w-full z-50">
      {/* Left: Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-gray-400 transition"
        onClick={toggleSidebar}
      >
        <Menu size={26} />
      </button>

      {/* Center: Logo (Perfectly Centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-3xl font-bold text-white select-none">
          <span className="text-gray-400 text-4xl">S</span>creen
          <span className="text-gray-400 text-4xl">V</span>ault
        </h1>
      </div>

      {/* Right: Buttons (Desktop only) */}
      <div className="hidden md:flex gap-3 ml-auto">
        <button
          className="bg-gray-900 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
          onClick={() => navigate("/addmovie")}
        >
          Add Movie
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;

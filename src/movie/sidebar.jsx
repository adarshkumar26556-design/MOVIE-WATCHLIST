// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { X } from "lucide-react";

// function Sidebar({ isOpen, setIsOpen }) {


//    const navigate = useNavigate();
//   return (
//     <>
//       {/* Overlay for small screens */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`bg-black text-white w-64 min-h-screen pt-20 fixed top-0 left-0 transform z-50 transition-transform duration-300 
//         ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         {/* Close button for mobile */}
//         <div className="absolute top-4 right-4 md:hidden">
//           <button onClick={() => setIsOpen(false)}>
//             <X size={26} className="hover:text-orange-500 transition" />
//           </button>
//         </div>

//         <ul className="space-y-4 px-4 mt-10">
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Home</li>
//           </Link>
//           <Link to="/watchlist" onClick={() => setIsOpen(false)}>
//             <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">
//               Watchlist
//             </li>
//           </Link>
//           <Link to="/about" onClick={() => setIsOpen(false)}>
//             <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">About</li>
//           </Link>
//         </ul>

//          <div className="ml-auto gap-3">
//         <button
//           className="hover:bg-gray-700 rounded p-2 cursor-pointer"
//           onClick={() => navigate("/addmovie")}
//         >
//           Add Movie
//         </button>
//         <br />
//         <button
//           className="hover:text-orange-500 text-white px-4 py-1 rounded shadow transition"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default Sidebar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-black text-white w-64 min-h-screen pt-20 fixed top-0 left-0 transform z-50 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close button (mobile only) */}
        <div className="absolute top-4 right-4 md:hidden">
          <button onClick={() => setIsOpen(false)}>
            <X size={26} className="hover:text-gray-400 transition" />
          </button>
        </div>

        <ul className="space-y-3 px-4 mt-10">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gray-900 hover:bg-gray-600 text-center py-2 rounded-lg shadow-md font-semibold 
                         hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/watchlist"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gray-900 hover:bg-gray-600 text-center py-2 rounded-lg shadow-md font-semibold 
                         hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
            >
              Watchlist
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gray-900 hover:bg-gray-600 text-center py-2 rounded-lg shadow-md font-semibold 
                         hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
            >
              About
            </Link>
          </li>

          {/* Add Movie + Login → Only on mobile */}
          <li className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/addmovie");
              }}
              className="w-full bg-gray-900 hover:bg-gray-600 text-center py-2 rounded-lg shadow-md font-semibold 
                         hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
            >
              Add Movie
            </button>
          </li>

          <li className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
              className="w-full bg-gray-900 hover:bg-gray-600 text-center py-2 rounded-lg shadow-md font-semibold 
                         hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
            >
              Login
            </button>
          </li>
        </ul>
      </aside>

      {/* Desktop fixed Add Movie & Login buttons */}
      <div className="hidden md:flex fixed top-5 right-5 gap-3 z-50">
        <button
          onClick={() => navigate("/addmovie")}
          className="bg-gray-900 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md 
                     hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
        >
          Add Movie
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-gray-900 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md 
                     hover:shadow-[0_0_15px_#9ca3af] transition-all duration-300"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Sidebar;

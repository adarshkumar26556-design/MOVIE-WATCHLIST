// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromWatchlist } from "../redux/slice/movieSlice";

// function Watchlist() {
//   const watchlist = useSelector((state) => state.movies.watchlist || []);
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-6">
//       <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400 tracking-wide">
//         🎬 My Watchlist
//       </h1>

//       {watchlist.length === 0 ? (
//         <p className="text-gray-400 text-center text-lg">
//           Your watchlist is empty.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {watchlist.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-2xl"
//             >
//               <img
//                 src={movie.image}
//                 alt={movie.movieName}
//                 className="w-full h-56 object-cover"
//               />

//               <div className="p-4 flex flex-col">
//                 <h2 className="text-xl md:text-2xl font-semibold text-white">
//                   {movie.movieName}
//                 </h2>
//                 <p className="text-gray-400 text-sm md:text-base mt-1">
//                   {movie.genre}
//                 </p>

//                 <button
//                   onClick={() => dispatch(removeFromWatchlist(movie.id))}
//                   className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition-transform transform hover:scale-[1.02]"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Watchlist;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist } from "../redux/slice/movieSlice";
import { useNavigate } from "react-router-dom";

function Watchlist() {
  const watchlist = useSelector((state) => state.movies.watchlist || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide text-center sm:text-left">
          🎬 My Watchlist
        </h1>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 px-6 rounded-xl hover:opacity-90 transition-transform transform hover:scale-[1.05] shadow-md"
        >
          ⬅️ Back to Home
        </button>
      </div>

      {/* Watchlist content */}
      {watchlist.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">
          Your watchlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <img
                src={movie.image}
                alt={movie.movieName}
                className="w-full h-56 object-cover"
              />

              <div className="p-4 flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {movie.movieName}
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {movie.genre}
                </p>

                <button
                  onClick={() => dispatch(removeFromWatchlist(movie.id))}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition-transform transform hover:scale-[1.02]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;



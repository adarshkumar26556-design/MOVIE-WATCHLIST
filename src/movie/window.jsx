import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie, addToWatchlist } from "../redux/slice/movieSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Window() {
  const movies = useSelector((state) => state.movies?.allMovies || []);
  const dispatch = useDispatch();

  const handleAddToWatchlist = (id) => {
    dispatch(addToWatchlist(id));
    toast.success("✅ Movie added to Watchlist!");
  };

  const handleDelete = (id) => {
    dispatch(removeMovie(id));
    toast.info("🗑️ Movie deleted!");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {movies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg mt-10">
          No movies added yet. Add one to get started!
        </p>
      ) : (
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            md:ml-64  /* keep left margin only for large screens */
            p-6 sm:p-8 md:p-10 lg:p-16 
            transition-all
          "
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="
                bg-gray-800 
                rounded-2xl 
                shadow-lg 
                overflow-hidden 
                transition-transform 
                hover:scale-105
                hover:shadow-xl
              "
            >
              <img
                src={movie.image}
                alt={movie.movieName}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold truncate">
                  {movie.movieName}
                </h2>
                <p className="text-gray-400 text-sm">{movie.genre}</p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="bg-gray-900 px-3 py-1 rounded-xl hover:bg-gray-700 transition text-sm"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleAddToWatchlist(movie.id)}
                    className="bg-gray-900 px-3 py-1 rounded-xl hover:bg-gray-700 transition text-sm"
                  >
                    + Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default Window;

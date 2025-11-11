// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addMovie } from "../redux/slice/movieSlice";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function AddMovie() {
//   const [movieName, setMovieName] = useState("");
//   const [genre, setGenre] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file)); // preview setup
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!movieName || !genre || !image) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     const movieData = {
//       movieName,
//       genre,
//       image: preview, 
//     };

//     dispatch(addMovie(movieData));
//     toast.success("Movie added successfully!");
//     navigate("/");

//     setMovieName("");
//     setGenre("");
//     setImage(null);
//     setPreview(null);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
//       <div className="bg-gray-100 shadow-2xl rounded-3xl p-8 w-full max-w-md border border-gray-300 transition-all duration-300 hover:scale-[1.01]">
//         <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
//           🎬 Add New Movie
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Movie Name
//             </label>
//             <input
//               type="text"
//               value={movieName}
//               onChange={(e) => setMovieName(e.target.value)}
//               placeholder="Enter movie name"
//               className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Genre
//             </label>
//             <input
//               type="text"
//               value={genre}
//               onChange={(e) => setGenre(e.target.value)}
//               placeholder="Enter genre"
//               className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Upload Poster
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//             />
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="mt-4 w-full h-64 object-cover rounded-xl shadow-md"
//               />
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-transform transform hover:scale-[1.02] shadow-md"
//           >
//             ➕ Add Movie
//           </button>
//         </form>

//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>
//     </div>
//   );
// }

// export default AddMovie;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../redux/slice/movieSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieName || !genre || !image) {
      toast.error("Please fill in all fields.");
      return;
    }

    const movieData = {
      movieName,
      genre,
      image: preview,
    };

    dispatch(addMovie(movieData));
    toast.success("Movie added successfully!");
    navigate("/");
    setMovieName("");
    setGenre("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {/* Back to Home Button */}
      <div className=" max-w-md mb-10 ml-auto ">
        <button
          onClick={() => navigate("/")}
          className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 px-6 rounded-xl hover:opacity-90 transition-transform transform hover:scale-[1.05] shadow-md"
        >
          ⬅️ Back to Home
        </button>
      </div>

      <div className="bg-gray-100 shadow-2xl rounded-3xl p-8 w-full max-w-md border border-gray-300 transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
          🎬 Add New Movie
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Movie Name
            </label>
            <input
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              placeholder="Enter movie name"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Genre
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Enter genre"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Poster
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full h-64 object-cover rounded-xl shadow-md"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-transform transform hover:scale-[1.02] shadow-md"
          >
            ➕ Add Movie
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default AddMovie;



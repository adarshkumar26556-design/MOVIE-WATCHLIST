// About.jsx
// import React from "react";

// export default function About() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
//       <h1 className="text-4xl font-bold mb-4">About This App</h1>
//       <p className="max-w-xl text-center text-lg mb-4">
//         Welcome to the Movie Watchlist Web App
//         <br />
//         This app helps you keep track of movies you want to watch. You can add, edit, and delete movies, and organize your personal watchlist with ease.
//       </p>
    
//     </div>
//   );
// }
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
          🎬 About This App
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Welcome to the <span className="font-semibold text-blue-300">Movie Watchlist Web App</span>!  
          This app helps you easily manage your favorite movies.  
          You can <span className="text-green-400">add</span>, <span className="text-yellow-400">edit</span>, and <span className="text-red-400">delete</span> movies, 
          or simply keep track of the ones you plan to watch later 🎥.
        </p>

       
      </div>
    </div>
  );
}


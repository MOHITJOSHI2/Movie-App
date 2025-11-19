import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import FavMovieCard from "./components/FavMovieCard";

function App() {
  const [movie, setMovie] = useState(null);
  const [input, setInput] = useState("One Piece");
  const [favourite, setFavourite] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchMovies() {
      const req = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`
      );
      const res = await req.json();
      setMovie(res.Search);
    }
    fetchMovies();
  }, [input]);

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-[34px] text-gray-800">
          🎬 Movie Explorer
        </h1>
        <input
          className="border border-gray-300 w-[45%] px-4 py-2 text-lg rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition text-black"
          type="text"
          placeholder="Search Movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <section className="mb-10">
        <h2 className="text-[26px] font-semibold text-gray-700 mb-4">
          Search Results
        </h2>
        <div className="flex flex-wrap gap-4">
          {movie?.map((elem) => (
            <div
              key={elem.imdbID}
              onClick={() =>
                setFavourite((prev) =>
                  prev.includes(elem.Poster) ? prev : [...prev, elem.Poster]
                )
              }
            >
              <MovieCard image={elem.Poster} desc={elem.Title} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[26px] font-semibold text-gray-700 mb-4">
          ❤️ Favourites
        </h2>
        <div className="flex flex-wrap gap-4">
          {favourite.map((movie, index) => (
            <div
              key={index}
              onClick={() =>
                setFavourite((prev) => prev.filter((fav) => fav !== movie))
              }
            >
              <FavMovieCard image={movie} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

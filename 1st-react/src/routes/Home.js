import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      );
      const json = await res.json();
      setMovieList(json.data.movies);
      setLoading(false);
    };
    getMovieList();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;

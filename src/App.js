import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import "./App.css";

const App = () => {
  const genreIncrement = 4;
  const [genres, setGenres] = useState(null);
  const [limit, setLimit] = useState(genreIncrement);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/.netlify/functions/getGenres", {
        method: "POST",
        body: limit,
      });
      const responseBody = await response.json();
      setGenres(responseBody.data.reference_list.values);
    };

    fetchData();
  }, [limit]);

  return (
    <>
      <NavBar />
      <HeroSection />
      {genres && (
        <div className="container">
          {Object.values(genres).map((genre, i) => (
            <Section key={genre + i} genre={genre.value} />
          ))}
        </div>
      )}
      <div
        className="page-end"
        onMouseEnter={() => {
          setLimit(limit + genreIncrement);
        }}
      />
    </>
  );
};

export default App;

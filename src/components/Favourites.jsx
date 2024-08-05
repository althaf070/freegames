import { Link } from "react-router-dom";
import Container from "./Container";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c5153ce593mshbfc163cc46b49fcp137d92jsncb2fbac35100",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [gameDetails, setGameDetails] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const fetchedGames = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(
              `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
              options
            );
            console.log(id);

            return response.json();
          })
        );
        setGameDetails(fetchedGames);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (favorites.length > 0) {
      fetchGameDetails();
    }
  }, [favorites]);

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setGameDetails(gameDetails.filter((game) => game.id !== id));
  };

  if (favorites.length === 0) {
    return (
      <Container>
        <h1 className="text-4xl mt-6 text-center">NO favorites added</h1>
        <div className="text-center mt-4">
          <Link to={"/"}>
            <button className="bg-zinc-600 p-3 rounded-lg shadow-xl font-bold text-xl hover:bg-black hover:animate-pulse antialiased">
              Go Home
            </button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="text-center font-semibold text-2xl">Favorites</h2>
      <div className="mt-4 p-2 grid md:grid-cols-3 sm:grid-cols-2 gap-5 place-items-center">
        {gameDetails.map((game) => (
          <div key={game.id} className="relative">
            <Link to={`/gamedetails/${game.id}`}>
              <div className="mb-3">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <h3>{game.title}</h3>
              <h4>{game.genre}</h4>
            </Link>
            <div className="absolute top-0 right-0 mr-3 mt-1">
              <button
                className=" bg-zinc-600 p-2 rounded-lg shadow-4xl font-bold text-md hov hover:bg-black antialiased"
                onClick={() => removeFavorite(game.id)}
              >
                Remove from favourites
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Favorites;

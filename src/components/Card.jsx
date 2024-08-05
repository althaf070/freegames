import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ games }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState({});

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    const status = {};
    storedFavorites.forEach(id => {
      status[id] = true;
    });
    setFavoriteStatus(status);
  }, []);

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavoriteStatus({ ...favoriteStatus, [id]: true });
    }
  };

  if (!games) return <h1 className="text-4xl text-white text-center font-semibold absolute top-0">Loading....</h1>;

  return (
    <div className="mt-4 p-2 grid md:grid-cols-3 sm:grid-cols-2 gap-5 place-items-center">
      {games.map((game) => (
        <div key={game.id} className="relative">
          <Link to={`/gamedetails/${game.id}`}>
            <div className="mb-3">
              <img src={game.thumbnail} alt={game.title} className="rounded-lg shadow-2xl" />
            </div>
            <h3>{game.title}</h3>
            <h4>{game.genre}</h4>
          </Link>
          <div className="absolute top-0 right-0 mr-3 mt-1">
            <button 
              className="bg-zinc-600 p-2 rounded-lg shadow-4xl font-bold text-md hover:bg-black antialiased" 
              onClick={() => addFavorite(game.id)}
            >
              {favoriteStatus[game.id] ? 'Favorite' : 'Add to favorites'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./Container";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c5153ce593mshbfc163cc46b49fcp137d92jsncb2fbac35100",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const GameDetails = () => {
  const [gameData, setGameData] = useState(null);
  const params = useParams();

  const fetchGame = async () => {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`,
        options
      );
      const data = await response.json();
      setGameData(data);
    } catch (error) {
      console.error("Error fetching game:", error.message);
    }
  };

  useEffect(() => {
    fetchGame();
  }, [params.id]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div
        key={gameData.id}
        className="flex flex-col justify-center h-auto w-auto place-items-center m-2"
      >
        <div className="sm:w-[500px] sm:p-5">
          <img
            src={gameData.thumbnail}
            alt={gameData.title}
            className="rounded-lg shadow-2xl w-full mt-11"
          />
        </div>
        <div>
          <div className="sm:text-center p-3">
            <h1 className="sm:text-4xl font-semibold">{gameData.title}</h1>
            <p className="sm:text-2xl font-mono">Genre:{gameData.genre}</p>
            <p className="sm:text-xl font-mono text-green-600">
              Platform:{gameData.platform}
            </p>
            <p className="text-xl font-mono text-green-600">
              Publisher:{gameData.publisher}
            </p>
            <p className="text-xl font-mono text-green-600">
              Developer:{gameData.developer}
            </p>

            <p className="sm:text-xl font-mono text-green-500">
              {gameData.description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GameDetails;

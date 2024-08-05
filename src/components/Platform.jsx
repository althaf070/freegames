/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./Container";
import Card from "./Card";
import FilterGames from "./FilterGames";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c5153ce593mshbfc163cc46b49fcp137d92jsncb2fbac35100",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const Platform = () => {
  const [gameData, setGameData] = useState([]);
  const [sortData, setSortData] = useState('release-date');
  const params = useParams();

  const fetchGame = async (sortby) => {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${params.type}&sort-by=${sortby}`,
        options
      );
      const data = await response.json();
      setGameData(data);
      console.log("Fetched game data:", data);
    } catch (error) {
      console.error("Error fetching game:", error.message);
    }
  };

  const fetchGameByCategory = async (genre, sortby) => {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${params.type}&category=${genre}&sort-by=${sortby}`,
        options
      );
      const data = await response.json();
      setGameData(data);
    } catch (error) {
      console.error("Error fetching game by category:", error.message);
    }
  };

  const handleFilter = (genre, sortby) => {
    if (genre === "") {
      fetchGame(sortby);
    } else {
      fetchGameByCategory(genre, sortby);
    }
    setSortData(sortby);  // Update the sort order state
  };

  useEffect(() => {
    fetchGame(sortData);
  }, [params.type, sortData]);

  if (!gameData) return <h1>Loading...</h1>;
  return (
    <Container>
      <FilterGames onFilter={handleFilter} />
      <Card games={gameData} />
    </Container>
  );
};

export default Platform;
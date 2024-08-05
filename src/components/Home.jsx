import { useEffect,useState } from "react"
import Card from "./Card"
import FilterGames from "./FilterGames";


const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c5153ce593mshbfc163cc46b49fcp137d92jsncb2fbac35100',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
const Home = () => {
    const [gamesData, setGamesData] = useState([])
    const [sortData, setSortData] = useState('release-date');

    const fetchGames = async (sort) => {
      try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sort}`, options);
        const data = await response.json();
        setGamesData(data);
      } catch (error) {
        console.error("Error fetching games:", error.message);
      }
    };
  
    const fetchByCategory = async (genre,sort) => {
      try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}&sort-by=${sort}`, options);
        const data = await response.json();
        setGamesData(data);
      } catch (error) {
        console.error("Error fetching games by category:", error.message);
      }
    };
  
  
    // eslint-disable-next-line no-unused-vars
    const handleFilter = (genre,sortby) => {
      if (genre === "") {
        fetchGames(sortby);
      } else {
        fetchByCategory(genre,sortby);
      }
      setSortData(sortby)
    };
   
    useEffect(() => {
      fetchGames(sortData);
    }, [sortData]);

    if (!gamesData) return <h1>Loading...</h1>;
  return (
    <div>
      <FilterGames onFilter={handleFilter}/>
        <Card games ={gamesData}/>
    </div>
  )
}

export default Home
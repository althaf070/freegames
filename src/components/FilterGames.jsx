/* eslint-disable no-unused-vars */

import { useState } from "react"

const FilterGames = ({onFilter}) => {
    const [genre, setGenre] = useState("")
    const [sortOrder, setSortOrder] = useState("release-date");
    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
    };
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
      };
    const handleFilter = () => {
        onFilter(genre,sortOrder)
    }
    
  return (
    <div className="flex m-5 space-x-3">
       <div>
       <select id="sort" value={sortOrder} onChange={handleSortChange} className="p-1 bg-black">
          <option value="release-date">Release Date</option>
          <option value="popularity">Popularity</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
       <select value={genre} onChange={handleGenreChange} className="p-1 bg-black">
       <option value="">All Genres</option>
        <option value="Shooter">Shooter</option>
        <option value="MMORPG">MMORPG</option>
        <option value="Strategy">Strategy</option>
        <option value="MOBA">MOBA</option>
        <option value="Racing">Racing</option>
        <option value="Card">Card Game</option>
        <option value="Fighting">Fighting</option>
        <option value="Sports">Sports</option>
        <option value="Social">Social</option>
        <option value="MMO">MMO</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Action">Action RPG</option>
        <option value="Sandbox">Sandbox</option>
        <option value="Survival">Survival</option>
        <option value="Open-World">Open-World</option>
        <option value="PvP">PvP</option>
        <option value="PvE">PvE</option>
      </select>
       </div>
       <div>
       <button className="w-16 bg-white text-black rounded-lg border-none p-1 outline-none shadow-lg" onClick={handleFilter}>
            Filter
        </button>
       </div>
    </div>
  )
}

export default FilterGames
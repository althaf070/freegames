import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
    <div className="flex space-x-3 sticky">
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/platform/pc'>
        PC games
        </Link>
         </div>
      <div>
      <Link to='/platform/browser'>
      Browser games
      </Link>   
        </div>
    </div>
    <div className="">
       <div className="flex space-x-3">
       <div>
        <Link to='/fav'>Favourites</Link>
       </div>
       </div>
    </div>
    </nav>
  );
};

export default Navbar;

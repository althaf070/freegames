import { Link } from "react-router-dom"


const Notfound = () => {
  return (
    <div className="text-center m-auto mt-11">
        <h1 className="text-4xl">OOps! something went wront</h1>
        <p>Maybe You wanna go back</p>
        <Link to='/'>
        <button className="p-3 backdrop-brightness-150 bg-fuchsia-900 rounded-lg shadow-md text-white mt-10">Go Home</button>
        </Link>
    </div>
  )
}

export default Notfound
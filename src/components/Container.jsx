import Navbar from './Navbar'

const Container = ({ children }) => {
  return (
    <main className="md:mx-24 m-4 p-4 bg-slate-900 min-h-screen shadow-2xl text-white rounded-md">
       <Navbar/>
      {children}
    </main>
  );
};

export default Container;

// pages/Home.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Home Page</h1>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToAbout}>
        Go to About Page
      </button>
    </div>
  );
}

export default Home;

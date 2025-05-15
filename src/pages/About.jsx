import { useNavigate } from "react-router-dom";
  


function About() {
  const navigate = useNavigate();  

  const goToHome   = () => {
    navigate("/");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>About Page</h1>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToHome}>
        Go to Home Page
        </button>
    </div>
  );    
  };
  export default About
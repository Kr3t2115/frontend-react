import Navbar from "../../components/navbar/navbar";
import './homePage.css'

export default function HomePage() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <div className="main">
      <Navbar></Navbar>
    </div>
  );
}

import Navbar from "../../components/navbar/navbar";
import "./homePage.css";

export default function HomePage() {
  console.log(import.meta.env.VITE_API_KEY);

  document.title = "Strona Główna";

  return (
    <div className="main">
      <Navbar></Navbar>
    </div>
  );
}

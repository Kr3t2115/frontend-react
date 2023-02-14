import Navbar from "../../components/navbar/navbar";
import "./homePage.css";

export default function HomePage() {
  document.title = "Strona Główna";

  return (
    <div className="main">
      <Navbar></Navbar>
    </div>
  );
}

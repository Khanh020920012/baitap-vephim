import logo from "./logo.svg";
import "./App.css";
import BookMovie from "./BookMovie/BookMovie";
import VePhim from "./VePhim/VePhim";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapercave.com/wp/EcNfOSK.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        filter: "grayscale(0.1)",
      }}
      className="App"
    >
      {" "}
      {/* <BookMovie /> */}
      <VePhim />
    </div>
  );
}

export default App;

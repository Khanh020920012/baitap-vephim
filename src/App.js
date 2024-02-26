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
        height: "150%",
        color: "white",
        filter: "grayscale(0.2)",
        fontSize: "20px",
      }}
      className="App"
    >
      Đặt vé xem phim {/* <BookMovie /> */}
      <VePhim />
    </div>
  );
}

export default App;

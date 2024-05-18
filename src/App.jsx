import "./App.css";
import EventComponent from "./components/EventComponent/EventComponent";
// import Header from "./components/Header/Header";
import Live from "./components/Live/Live";
import HeroComponent from "./components/HeroComponent/HeroComponent";

function App() {
  return (
    <div className="layout">
      {/* <Header /> */}
      <HeroComponent />
      <Live />
      <EventComponent />
    </div>
  );
}

export default App;

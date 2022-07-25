import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}
      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trendingg section */}
      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of superhero section */}
    </div>
  );
}

export default App;

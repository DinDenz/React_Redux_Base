import "./App.css";
import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";
import Spinner from "./Spinner";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;

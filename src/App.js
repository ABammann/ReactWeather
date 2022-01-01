import SearchEngine from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <SearchEngine className="App-search" />
        <p className="App-footer">
          Code made by Alessandra Bammann. Check it at{" "}
          <a href="https://github.com/ABammann/ReactWeather">GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;

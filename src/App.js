import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Antwerp" />

        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/alessandra-bammann-327983a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Alessandra Bammann
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/ABammann/ReactWeather"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://zealous-lamport-915a56.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React AJAX Search Engine</h1>
        <form>
          <input type="search" placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
      </header>
      <p>
        This project was coded by{" "}
        <a href="https://github.com/Dlayane-Mat/weather-react-app">
          Dlayane Matjila
        </a>
      </p>
    </div>
  );
}

export default App;

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
        <p>
          This project was coded by{" "}
          <a href="https://github.com/Dlayane-Mat/">Dlayane Matjila</a> and is
          on{" "}
          <a href="https://github.com/Dlayane-Mat/weather-react-app"> Github</a>{" "}
          and hosted on{" "}
          <a href="https://app.netlify.com/sites/superlative-kataifi-b85c70/overview">
            Netlify
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

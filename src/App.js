import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* /Search */}
          <Route
            path="/search"
            element={
              <>
                <SearchPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>

        <Footer />

        {/* Home */}
        {/* Header */}

        {/* Bannner */}

        {/* Search */}

        {/* Cards */}

        {/* Footer */}

        {/* SearchPage */}
        {/* SearchPage */}
      </div>
    </Router>
  );
}

export default App;

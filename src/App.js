import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/User";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "SirAlexFerguson",
    avatar_url:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article22087572.ece/ALTERNATES/s1200c/1_Sir-Alex-Ferguson.jpg",
  });

  const isLoggedIn = loggedInUser !== null;
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className="App">
          <Topics />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/:topic_slug/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

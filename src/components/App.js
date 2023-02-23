import React from "react";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
        <Header />
      <aside>
        <About />
      </aside>
      <main>
        <ArticleList />
      </main>

    </div>
  );
}

export default App;




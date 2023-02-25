import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      content: "This is my first blog post.",
    },
    {
      id: 2,
      title: "My Second Post",
      content: "This is my second blog post.",
    },
    {
      id: 3,
      title: "My Third Post",
      content: "This is my third blog post.",
    },
  ];

  return (
    <div className="App">
      <Header />
      <aside>
        <About />
      </aside>
      <main>
        <ArticleList posts={posts} />
      </main>
    </div>
  );
}

export default App;

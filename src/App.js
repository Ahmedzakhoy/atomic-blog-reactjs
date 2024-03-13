import { useEffect, useState } from "react";
import { PostProvider } from "./contexts/PostContext";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import Archive from "./components/Archive";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;

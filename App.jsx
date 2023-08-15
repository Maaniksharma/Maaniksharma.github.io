import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/Navbar";
import MainPage from "./MainPage";
import MoviePage from "./components/MoviePage";
import Footer from "./Footer";
import axios from "axios";

axios.defaults.params = {};
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => (
  <div className="">
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Movies/:id" element={<MoviePage />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </QueryClientProvider>
    </BrowserRouter>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

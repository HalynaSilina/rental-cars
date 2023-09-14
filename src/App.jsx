import "./App.css";
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("../src/pages/Home"));
const Favorites = lazy(() => import("../src/pages/Favorites"));
const Catalog = lazy(() => import("../src/pages/Catalog"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
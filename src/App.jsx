import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

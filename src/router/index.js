import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={HomePage()}></Route>
    </Routes>
  );
}

export default Router;

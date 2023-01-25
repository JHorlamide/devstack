import { Route, Routes } from "react-router-dom";
import { HOME } from "./ROUTE_CONSTANT";
import Home from "../pages/Home/Home";

const RouteConfig = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
};

export default RouteConfig;

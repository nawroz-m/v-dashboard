import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dashboardRoutes } from "../routes/Routes";
import AppLayout from "../components/layouts/AppLayout";

const RoutingConfig = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            {dashboardRoutes.map((route, idx) => {
              return (
                <>
                  <Route
                    path={route.path}
                    element={route.component}
                    key={idx}
                  />
                </>
              );
            })}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutingConfig;

import { Switch, Route } from "react-router-dom";

import routes from "../Helpers/Routes";
import AccountPage from "../pages/AccountPage";
import CodePage from "../pages/CodePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import RepositoriesPage from "../pages/RepositoriesPage";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Switch>
      <PublicRoute exact path={routes.HomePage} component={HomePage} />
      <PublicRoute exact path={routes.LoginPage} component={LoginPage} />
      <PublicRoute exact path={routes.RegisterPage} component={RegisterPage} />
      <PrivateRoute exact path={routes.AccountPage} component={AccountPage} />
      <PrivateRoute
        exact
        path={routes.RepositoriesPage}
        component={RepositoriesPage}
      />
      <Route exact path={routes.CodePage} component={CodePage} />

      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;

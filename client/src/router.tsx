import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import App from "./App";
import Generated from "./pages/Generated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/confirm",
        element: <Confirm />,
        children: [
          {
            path: "generate",
            element: <Generated />,
          },
        ],
      },
    ],
  },
]);
export default router;

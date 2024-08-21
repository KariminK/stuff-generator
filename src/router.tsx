import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/confirm/:topic/:style?/:wordNumber?",
        element: <Confirm />,
      },
    ],
  },
]);
export default router;

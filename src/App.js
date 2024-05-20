import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }, {}]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

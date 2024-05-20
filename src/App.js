import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages:
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

//Routing:
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

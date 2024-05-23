import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages:
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // ...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

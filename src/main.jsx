import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage, loader as eventLoader } from "./pages/EventPage";
import { EventsPage, loader as eventsLoader } from "./pages/EventsPage";
import { AddEvent, loader as newEventLoader } from "./pages/AddEvent";
import { GroupPage, loader as groupLoader } from "./pages/GroupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { ErrorState } from "./components/util/ErrorState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: eventsLoader,
        errorElement: <ErrorState />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: eventLoader,
        errorElement: <ErrorState />,
      },
      {
        path: "/new",
        element: <AddEvent />,
        loader: newEventLoader,
        errorElement: <ErrorState />,
      },
      {
        path: "/group",
        element: <GroupPage />,
        loader: groupLoader,
        errorElement: <ErrorState />,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

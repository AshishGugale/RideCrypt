import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Working from "./pages/Working.jsx";
import Book from "./pages/Book.jsx";
import Offer from "./pages/Offer.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./pages/Error.jsx";
import Trips from "./pages/Trips.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/book", element: <Book /> },
      { path: "/working", element: <Working /> },
      { path: "/offer", element: <Offer /> },
      { path: "/trips", element: <Trips /> },

      // { path: "/createbid/:id", element: <CreateBid /> },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}></RouterProvider>);

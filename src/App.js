import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Views/Root";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import ErrorPage from "./Views/error-page";

import Header from "./Components/Header";
import Contact2 from "./Views/Contact2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact2 />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

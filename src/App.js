import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Root from "./Views/Root";
import Contact from "./Views/Contact";
import ErrorPage from "./Views/error-page";


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
    ],
  }
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

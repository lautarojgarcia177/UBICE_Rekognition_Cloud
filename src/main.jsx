import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { ChakraProvider } from '@chakra-ui/react'
import UploadPhotos from "./routes/UploadPhotos";

export const appRoutes = {
  root: "/",
  uploadPhotos: "uploadPhotos"
};

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: appRoutes.uploadPhotos,
        element: <UploadPhotos />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Login from "./pages/Login";
import ProtectedRoute from "./components/AuthGuard";
import ResourceDetail from "./pages/ResourceDetail";
import PageNotFound from "./pages/PageNotFound";
import FilmDetail from "./pages/FilmDetail";
import VehicleDetail from "./pages/VehicleDetail";
import StartShipsDetail from "./pages/StartShipsDetail";
import SpeciesDetail from "./pages/SpeciesDetail";
import PlanetDetail from "./pages/PlanetDetail";
import Landing from "./pages/Langing";

const queryClient = new QueryClient();

type Route = RouteObject & {
  children?: Route[];
};

const routes: Route[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Landing />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/people/:id",
        element: (
          <ProtectedRoute>
            <ResourceDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/films/:id",
        element: (
          <ProtectedRoute>
            <FilmDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/vehicles/:id",
        element: (
          <ProtectedRoute>
            <VehicleDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/starships/:id",
        element: (
          <ProtectedRoute>
            <StartShipsDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/species/:id",
        element: (
          <ProtectedRoute>
            <SpeciesDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/planets/:id",
        element: (
          <ProtectedRoute>
            <PlanetDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

// Create the router with type
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);

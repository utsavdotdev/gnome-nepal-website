import { useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import { Hero, Sponsor } from "./pages";
import NotFound from "./pages/NotFound";
import SessionRequestForm from "./pages/SessionRequestForm";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [{ path: "", element: <Hero /> }],
    },
    {
      path: "/sponsor",
      element: <Sponsor />,
    },
    {
      path: "*", // Catch-all route for unmatched non-hash routes
      element: <NotFound />, // Display 404 page for invalid non-hash routes
    },
    {
      path: "/session-request",
      children: [{ path: "", element: <SessionRequestForm /> }],
    },
  ]);
}

import { createBrowserRouter } from "react-router-dom";

//pages imports
import LandingPage from "../APP/pages/landingPage/LandingPage";
import Homepage from "../APP/pages/shop/pages/Homepage";
import SingleItemPage from "../APP/pages/shop/pages/SingleItemPage";
import Shop from "../APP/pages/shop/Shop";
import About from "../APP/pages/aboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About/>
  },
  //shop routes
  {
    element: <Shop />,
    children: [
      {
        path: "/shop",
        element: <Homepage />,
      },
      {
        path: "/shop/item/:id",
        element: <SingleItemPage />,
      },
    ],
  },
]);

export default router;

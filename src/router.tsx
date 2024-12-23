import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Beans from "./pages/Beans";
import Recipties from "./pages/Recipties";
import Layout from "./components/Layout/index.tsx";
import Bean from "./pages/Bean/index.tsx";
import Loader from "./components/Loader/index.tsx";
import Review from "./pages/Review/index.tsx";
import RecipePage from "./pages/Recipe/Recipe.tsx";
import Combinations from "./pages/Combinations/index.tsx";
import History from "./pages/History/index.tsx"
import About from "./pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "Jelly-Belly",
    element: <Layout />,
    loader: Loader,
    children: [
      {index: true, element: <Home />},
      {path: "facts", element: <Facts />},
      {path: "recipties", element: <Recipties />},
      {path: "recipe/:id", element: <RecipePage />},
      {path: "bean/:id", element: <Bean />},
      {path: "beans", element: <Beans />},
      {path: "*", element: <NotFound />},
      {path: "review", element: <Review />},
      {path: "combinations", element: <Combinations/>},
      {path: "history", element: <History/>},
      {path: "about", element: <About/>},
    ]
  }
]);

export default router;


// {
//   path: "/",
//   element: <Home />,
// },
// {
//   path: "/facts",
//   element: <Facts />,
// },
// {
//   path: "*",
//   element: <NotFound />,
// },
// {
//   path: "/beans",
//   element: <Beans />,
// },
// {
//   path: "/recipties",
//   element: <Recipties />,
// },
// {
//   path: "/combinations",
//   element: <Combinations />,
// },
// {
//   path: "/history",
//   element: <History />
// },
// {
//   path: "/bean/:id",
//   element: <BeanPage />
// }
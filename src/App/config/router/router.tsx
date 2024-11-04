import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "../../../Pages/ListPage/ui/RepoList";
import { ItemPage } from "../../../Pages/ItemPage/ui/ItemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage/>,
  },
  {
    path: "/repo/:author/:title",
    element: <ItemPage />,
  },
]);
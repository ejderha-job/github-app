import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "../../../Pages/RepoList/ui/RepoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage></ListPage>,
  },
  {
    path: "/:id",
    element: <div>selected repo</div>,
  },
]);
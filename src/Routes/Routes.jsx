import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PageToRead from "../pages/pageToRead/pageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("books.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "readList",
        loader: () => fetch("books.json"),
        Component: ReadList,
      },
      {
        path: "pageToRead",
        Component: PageToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("books.json"),
        Component: BookDetails,
      },
    ],
  },
]);

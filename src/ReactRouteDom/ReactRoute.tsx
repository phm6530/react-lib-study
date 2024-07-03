import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { withAuth } from "./RouteHoc";
import GnbHeader from "@/Layout/Header";
import HomePage from "@/Page/HomePage";
import About from "@/Page/About";
import { Aboutprops } from "@/Type/type";

//Loader 권한 체크
// const authCheckLoader = (auth: boolean) => {
//   if (!auth) {
//     alert("권한없음");
//     return  redirect("/");
//   }
//   return null;
// };

//createBrowerRouter 설정

//Route Provider 설정

function ReactRoute() {
  const AuthCheck = withAuth(About, "/");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GnbHeader />,
      children: [
        {
          index: true,
          element: <HomePage title={"Home"} />,
        },
        {
          path: "/about",
          element: <AuthCheck title={"About"} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default ReactRoute;

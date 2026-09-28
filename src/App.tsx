import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Systems from "./pages/Systems.tsx";
import Compact from "./pages/Compact.tsx";
import systems from "./systems";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Systems,
  },
  {
    path: "/:system/compact",
    Component: Compact,
    loader: ({params}) => {
      const system: string = params.system ?? "exovoid";
      return {system: systems[system as keyof typeof systems]}
    },
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

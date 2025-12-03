// Import necessary components and functions from react-router-dom.
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>Not found!</h1>,
        children: [
            // 1. Ruta Principal (Home)
            {
                path: "/",
                element: <Home />,
            },
            
            // 2. Ruta Dinámica (Detalle)
            // Esta es la clave: ':type' recibe "people" o "planets" y ':uid' recibe el ID
            {
                path: "/single/:type/:uid",
                element: <Single />,
            },

            // 3. Ruta Demo (Opcional)
            // La dejamos activa para que no te dé error si el archivo existe
            {
                path: "/demo",
                element: <Demo />,
            },
        ],
    },
]);
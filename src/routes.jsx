// Import necessary components and functions from react-router-dom.
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo"; // Opcional, si la usas

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>Not found!</h1>,
        children: [
            // Ruta principal (Home)
            {
                path: "/",
                element: <Home />,
            },
            // Ruta dinámica para detalles (Single)
            // :type capturará "people", "planets", etc.
            // :uid capturará el ID (ej: "1")
            {
                path: "/single/:type/:uid",
                element: <Single />,
            },
            // Ruta Demo (opcional)
            {
                path: "/demo",
                element: <Demo />,
            },
        ],
    },
]);
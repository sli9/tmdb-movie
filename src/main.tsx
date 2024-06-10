import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {resolver, theme} from "./theme.ts";
import {MantineProvider} from "@mantine/core";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RatedMovies} from "./layout/rated-movies/RatedMovies.tsx";
import {ErrorPage} from "./components/ErrorPage.tsx";
import {Movies} from "./layout/movies/Movies.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={"/404"}/>,
        children: [
            {
                index: true,
                element: <Navigate to={"/movies"}/>,
            },
            {
                path: "/movies",
                element: <Movies/>,
            },
            {
                path: "/rated",
                element: <RatedMovies/>,
            },
        ],
    },
    {
        path: "/404",
        element: <ErrorPage/>,
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
            <RouterProvider router={router}/>
        </MantineProvider>
    </React.StrictMode>
);

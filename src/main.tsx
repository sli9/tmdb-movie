import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {theme} from "./theme.ts";
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);

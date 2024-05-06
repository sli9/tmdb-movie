import "@mantine/core/styles.css";
import {AppShell} from "@mantine/core";
import {Navbar} from "./layout/navbar/Navbar.tsx";
import {Movies} from "./layout/movies/Movies.tsx";
import {Route, Routes} from "react-router-dom";
import {RatedMovies} from "./layout/rated-movies/RatedMovies.tsx";


export default function App() {

    return <AppShell
        styles={{
            navbar: {
                backgroundColor: "#F2EBF9"
            },
            main: {
                backgroundColor: "#F5F5F6"
            }
        }}
        navbar={{
            width: 280,
            breakpoint: "sm",
        }}
        padding={"md"}
    >
        <AppShell.Navbar p="24px">
            <Navbar/>
        </AppShell.Navbar>
        <AppShell.Main>
            <Routes>
                <Route path={"/"} element={<Movies/>}/>
                <Route path={"/rated"} element={<RatedMovies/>}/>
            </Routes>
        </AppShell.Main>


    </AppShell>
}
